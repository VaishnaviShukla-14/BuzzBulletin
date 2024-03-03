import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'; // Assuming you have a Signup.css file for styling

function UserSignup() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        adharcard: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure that adharcard and address are included in the data state
            const res = await axios.post("http://localhost:3001/api/user", {
                ...data,
                adharcard: data.adhr,  // Assuming adhr is the correct field name in your form
                address: data.add,     // Assuming add is the correct field name in your form
            });
            if (res.data && res.data.newUser.address !== "") {
                toast.success(`New User Created ${res.data.newUser.name}`);
            }
        } catch (error) {
            toast.error('Please Insert the Data Before submit');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h3 style={{ color: 'black', marginLeft: '115px', fontWeight: '500' }}>REGISTER</h3>
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
                        <button className="btn-design"><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></button>
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
