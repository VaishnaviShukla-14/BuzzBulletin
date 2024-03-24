import React, { useEffect, useState } from "react";
import "./Weather.css";

const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";

function Weather() {
  const [countries, setCountries] = useState([]);
  const [weatherData, setWeatherData] = useState({
    humidity: "",
    windSpeed: "",
    temperature: "",
    location: "",
    sunrise: "",
    sunset: "",
    isDay: true,
  });

  useEffect(() => {
    const fetchData = async (latitude, longitude) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${Api_key}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setWeatherData({
          humidity: `${data.main.humidity}%`,
          windSpeed: `${Math.round(data.wind.speed)} Km/hr`,
          temperature: `${Math.round(data.main.temp)}`, // Removed rounding here
          location: data.name,
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          isDay: data.weather[0].icon.includes("d"),
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
          // Fallback to default location (Lucknow)
          fetchData(26.8467, 80.9462); // Coordinates for Lucknow
        }
      );
    };

    fetchUserLocation();

    // Fetch countries list
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountries();
  }, []);

  const search = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_key}`;
      const res = await fetch(url);
      const data = await res.json();

      setWeatherData({
        humidity: `${data.main.humidity}%`,
        windSpeed: `${Math.round(data.wind.speed)} Km/hr`,
        temperature: `${Math.round(data.main.temp)}`, // Removed rounding here
        location: data.name,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        isDay: data.weather[0].icon.includes("d"),
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handalSearch = (e) => {
    if (e.keyCode === 13) {
      const inputElement = document.getElementsByClassName("form-control input")[0];
      const cityName = inputElement.value || "Lucknow";
      search(cityName);
    }
  };

  const formatTime = (time) => {
    return time.substring(0, 5);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${weatherData.isDay ? "day" : "night"}`} style={{marginTop:'5px',marginBottom:'5px'}}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <h1 className="temperature">{weatherData.temperature}°C</h1>
          <p className="location">{weatherData.location}</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item search-bar">
              <input
                type="text"
                className="form-control input"
                onKeyDown={(e) => handalSearch(e)}
                list="datalistOptions"
                placeholder="Search city"
              />
              <i className="bi bi-search search-icon" onClick={() => search(document.querySelector(".form-control.input").value)}></i>
            </li>
            <li className="nav-item details">
              <p className="labels">
                <span>Wind: {weatherData.windSpeed}</span>
                <span>Humidity: {weatherData.humidity}</span>
                <span>Sunrise: {formatTime(weatherData.sunrise)}</span>
                <span>Sunset: {formatTime(weatherData.sunset)}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Weather;

