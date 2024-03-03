// import axios from 'axios';
// import React, { useState } from 'react';
// // import { Col, Container, Row } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Login.css';
// import Cookies from 'js-cookie'; 
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";



// function UserLogin() {
//     const [login, setLogin] = useState({
//         email: "",
//         password: "",
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setLogin({ ...login, [name]: value })
//     }

//     const  Navigate= useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const res = await axios.post('http://localhost:3001/api/login', login)
//             Navigate('/AdminPage');
//             toast.success(`Welcome ${res.data.loginDeatial.name}`);
//             console.log(res.data.loginDeatial.name);
//             Cookies.set('name', res.data.loginDeatial.name);
//         } catch (error) {
//             console.log("error to login", error);
//             toast.error(`${error.response.data.mess}`);
//         }
//     }
//     return (
//         <>
//             {/* <Container > 
//                  <Row>  */}
//                 <div className="bgimage" style={{ background: 'url(../Images/NewwsBg.jpeg) no-repeat', backgroundSize: 'cover' }}>
//                     {/* <Col sm="6">
//                         <img src="Images/NewImSe.jpg" alt="" className='bgimage' />
//                     </Col>  */}
//                         <div className='Login_container'>
//                             <div className='main-form'>
//                             <div className="wrapper">
//                             <form onSubmit={handleSubmit}>
//                       {/* <Col  classname="Login_form">  */}
//                         <h1><span className='signup-form-text'>Login </span> </h1>
//                         {/* <p>If your are allready register then <span className='signup-form-text'>Enter Your Deatails</span></p> */}
//                             <div className="input-box">
//                             <input type="email" onChange={handleChange} placeholder='Email' name='email' className='form-control' required />
//                             <FaUser className="icon" />
//                             </div>
//                             <div className="input-box">
//                                 <input type="password" onChange={handleChange} placeholder='Password' name='password' className='form-control mt-3' autoComplete='123' required />
//                                 <FaLock className="icon"/>
//                             </div>
//                             <div className='remember-forgot'>
//                             {/* <p>are you forgot password?</p><Link to="/ForgotPass"> Forget Pass</Link> */}
//                             <label><input type="checkbox"/>Remember me</label>
//                             <Link to="/ForgotPass">Forgot Password?</Link>
                            
//                             </div>
//                             <div className="d-grid gap-2 mt-2 submit">
                                
//                                 <button className="btn btn-primary" type='submit' >Login</button>
//                                 </div>
//                                 <div className="register-link">
//                                 <p>Don't have an account?</p><Link to="/Register">Register</Link>
//                             </div>
//                         </form>
//                         <ToastContainer
//                             position="top-right"
//                             autoClose={5000}
//                             hideProgressBar={false}
//                             newestOnTop={false}
//                             closeOnClick
//                             rtl={false}
//                             pauseOnFocusLoss
//                             draggable
//                             pauseOnHover
//                         />
//                     {/* </Col>  */}
//                     </div>
//                             </div>
                
//                     </div>
                    
//                  {/* </Row>
//             </Container>  */}
//         </div>
        
// </>
//     )
// }

// export default UserLogin;


import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Cookies from 'js-cookie'; 
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



function Login() {
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
                            <h1><span className='signup-form-text' style={{marginBottom:'20px'}}>Login</span> </h1>
                            <div className="input-box">
                                <input type="email" onChange={handleChange} placeholder='Email' name='email' className='form-control' required />
                                {/* <FaUser className="icon" /> */}
                            </div>
                            <div className="input-box">
                                <input type="password" onChange={handleChange} placeholder='Password' name='password' className='form-control mt-3' autoComplete='123' required />
                                {/* <FaLock className="icon" /> */}
                            </div>
                            <div className='remember-forgot'>
                                <label><input type="checkbox"/>Remember me</label>
                                <Link to="/ForgotPass" style={{color:'black'}}>Forgot Password?</Link>
                            </div>
                            <div className="d-grid gap-2 mt-2 submit">
                                <button className="btn-design" type='submit' >Login</button>
                            </div>
                            <div className="register-link">
                                <p>Don't have an account?</p><Link to="/Register" style={{color:'black'}}>Register</Link>
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

export default Login;

