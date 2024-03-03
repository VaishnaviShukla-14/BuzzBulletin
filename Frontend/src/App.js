import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ForgetPass from './Pages/ForgetPass';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';
import Footer from './MandatoryItems/Footer';
import Weather from './Pages/Weather';
import Logout from './Pages/Logout';
import AdminPage from './Admin_panel/AdminPage';
import User from './Admin_panel/user';
import NewsPage from './Admin_panel/NewsPage';
import NationalNews from './ShowNews/NationalNews';
import InternationalNews from './ShowNews/Internationalnews';
import EducationNews from './ShowNews/Educationalnews';
import SportsNews from './ShowNews/Sportsnews';

function App() {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/nationalnews" element={<NationalNews />} />
          <Route path="/InternationalNews" element={<InternationalNews/>} />
          <Route path="/educationalnews" element={<EducationNews />} />
          <Route path="/sportsnews" element={<SportsNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
