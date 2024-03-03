import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Logout = () => {

    const handleLogout = () => {
        // Perform logout actions here, such as clearing user session, state, or any other cleanup
        MySwal.fire({
            icon: 'success',
            title: 'Logout Successful!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            // Redirect or perform additional actions after the user acknowledges the success
            // For example, redirect to the login page
            window.location.href = '/Login';
        });
    };

    return (
        <>
            <div className="bgimage" style={{ background: "url(Images/NewImSe.jpg)" }}>
                <div className="MainPage_content">
                    <h1>Welcome to MainPage!</h1>
                    {/* Add a button or link for logout */}
                    <Button variant="contained" color="error" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Logout;
