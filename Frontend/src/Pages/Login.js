import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Cookies from 'js-cookie'; 
import { FaUser } from 'react-icons/fa';

function UserLogin() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/api/login', login);
            Navigate('/AdminPage');
            toast.success(`Welcome ${res.data.loginDeatial.name}`);
            console.log(res.data.loginDeatial.name);
            Cookies.set('name', res.data.loginDeatial.name);
        } catch (error) {
            console.log("error to login", error);
            toast.error(`${error.response.data.mess}`);
        }
    };

    return (
        <>
            <div className='Login_container'>
                <div className='main-form'>
                    <div className="wrapper">
                        <form onSubmit={handleSubmit}>
                            <h1><span className='signup-form-text' style={{marginBottom:'20px',fontFamily:'mv boli',fontWeight:'550'}}>Login</span> </h1>
                            <div className="input-box">
                            <input type="email" onChange={handleChange} placeholder='Email' name='email' className='form-control icon-input' required />
                             </div>
                            <div className="input-box">
                                <input type="password" onChange={handleChange} placeholder='Password' name='password' className='form-control mt-3' autoComplete='123' required></input>
                            </div>
                            <div className='remember-forgot'>
                                <label><input type="checkbox"/>Remember me</label>
                                <Link to="/ForgotPass" style={{color:'black',textDecoration:'none'}}>Forgot Password?</Link>
                            </div>
                            <div className="d-grid gap-2 mt-2 submit">
                                <button className="btn-design" type='submit' >Login</button>
                            </div>
                            <div className="register-link">
                                <p>Don't have an account?</p><Link to="/Register" style={{color:'black',textDecoration:'none'}}>Register</Link>
                            </div>
                        </form>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;
