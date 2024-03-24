import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function UserSignup() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        adharcard: "",
});

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z]).{8,10}$/;
        return passwordRegex.test(password);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validateAdharcard = (adharcard) => {
        const adharcardRegex = /^[0-9]{12}$/;
        return adharcardRegex.test(adharcard);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, phone, address, adhr, add } = data;

        // Validate email
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            toast.error('Please enter a valid password');
            return;
        }

        // Validate phone
        if (!validatePhone(phone)) {
            toast.error('Please enter a valid phone number');
            return;
        }

        // Validate adharcard
        if (!validateAdharcard(adhr)) {
            toast.error('Please enter a valid Adharcard number');
            return;
        }

        try {
            const res = await axios.post("http://localhost:3001/api/user", {
                ...data,
                adharcard: adhr,
                address: add,
            });
            if (res.data && res.data.newUser.address !== "") {
                toast.success(`New User Created ${res.data.newUser.name}`);
            }
        } catch (error) {
            toast.error('Error creating user. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h3 style={{ color: 'black', marginLeft: '115px', fontWeight: '500',fontFamily:'mv boli'}}>REGISTER</h3>
                <p style={{ color: 'black', marginLeft: '40px' }}>Fill in your details and register yourself!</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Name' className='form-control mt-2' onChange={handleChange} required />
                    <input type="tel" name='phone' placeholder='Phone' className='form-control mt-2' onChange={handleChange} required />
                    <input type="email" name='email' placeholder='Email' className='form-control mt-2' onChange={handleChange} required />
                    <input type="text" name='add' placeholder='Address' className='form-control mt-2' onChange={handleChange} required />
                    <input type="text" name='adhr' placeholder='Adharcard Number' className='form-control mt-2' onChange={handleChange} required />
                    <input type="password" autoComplete='123' name='password' placeholder='Password' className='form-control mt-2' onChange={handleChange} required />
                    <div className="d-grid gap-2 mt-4">
                        <button className="btn-design" type='submit'>Submit</button>
                        <button className="btn-design"><Link to="/login" style={{ textDecoration: 'none' ,color:'white'}}>Login</Link></button>
                    </div>
                </form>
            </div>
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
    );
}

export default UserSignup;
