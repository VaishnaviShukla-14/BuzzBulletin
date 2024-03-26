import React from "react";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import './ForgetPass.css';

const ForgetPass = () => {
    return (
        <div className="forget-pass-container">
            <div className="forget-pass-form">
                <h2 style={{fontFamily:'mv boli'}}>RESET PASSWORD</h2>
                <div>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple" style={{color:'black'}}>E-mail</InputLabel>
                        <Input 
                            id="component-simple"
                            endAdornment={
                                <InputAdornment position="end">
                                    <EmailIcon/>
                                </InputAdornment> 
                            }
                        />
                    </FormControl>
                    <br/><br/>
                    <Button href="/Login" variant="contained" style={{color:'white',letterSpacing:'1.5px',backgroundColor:'black',borderRadius:'12px',fontWeight:'bold'}}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ForgetPass;


// import React, { useEffect, useState } from 'react';
// import frgtImage from "../";
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import authentication from './firebase';
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import VerifyOtpComp from './VerifyOtpComp';

// function ForgotPass() {

//       const [newPassword , setNewPassword] = useState('');
//       const [newConfirmPassword , setNewConfirmPassword] = useState('');
//       const [phNumber, setPhNumber] = useState('');
//       const navigate = useNavigate();

//       useEffect(()=>{
//             setPhNumber(localStorage.getItem("UserPhoneNumber"))
//             // console.log(phNumber)
//       }, []);

//       const updateNewPasswordInDb = async ()=>{

//             if(newPassword.length < 8){
//                   Swal.fire({
//                         icon: "error",
//                         title: "Oops...",
//                         text: "Password should be at least 8 characters",
//                   });
//             }
//             else if(newPassword === newConfirmPassword){

//                   // phone verification done using otp.

//                   // In this , you need to encrypt the password and then save it to databse.
//                   // From here , send the phone, and new password in the request body.

//                   const response = await fetch("http://localhost:3000/api/updatePassword", {
//                         method: 'POST',
//                         headers:{
//                               'Content-Type':"application/json"
//                         },
//                         body: JSON.stringify({ contactNumber: phNumber, password : newPassword})
//                   })
//                   if(response.ok){
//                         Swal.fire({
//                               position: "center",
//                               icon: "success",
//                               title: "Password updated successfully",
//                               showConfirmButton: false,
//                               timer: 1500
//                         });
//                         navigate("/LoginPage")
//                   }
//                   else{
//                         Swal.fire({
//                               icon: "error",
//                               title: "Oops...",
//                               text: "internal server error , TRY AGAIN LATER",
//                         });
//                   }
//             }
//             else{
//                   Swal.fire({
//                         icon: "error",
//                         title: "Oops...",
//                         text: "Confirm Password not matched!",
//                   });
//             }
//       }

      

//       return (
//             <div>
//                   <div className="container-fluid">
//                         <div className="row">
//                               <div className="col-sm-6">
//                                     <img className="responsive-video" style={{
//                                           width:"80%"
//                                     }} src={frgtImage} alt="Forgot Password" />
//                               </div>
//                               <div className="col-sm-6">
//                                     <div style={{ margin: "20px" }} className="stepComplete">
//                                           <h4>Don't forget floofy</h4>
//                                     </div>
//                                     <div className="logincinfo">
//                                           <Box
//                                                 component="form"
//                                                 sx={{
//                                                       '& > :not(style)': { m: 1, width: '25ch' },
//                                                 }}
//                                                 noValidate
//                                                 autoComplete="off"
//                                           >
//                                                 <TextField id="standard-basic" label="Enter password" variant="standard" onChange={(newPsswrd) => {
//                                                       setNewPassword(newPsswrd.target.value)
//                                                 }} />
//                                                 <TextField id="standard-basic" label="confirm password" variant="standard" type="password" onChange={(cnfrmNewPsswrd) => {
//                                                       setNewConfirmPassword(cnfrmNewPsswrd.target.value)
//                                                 }} />
//                                           </Box>
//                                           <Button onClick={updateNewPasswordInDb} variant="contained">Update</Button>
                                          
//                                     </div>

//                               </div>
//                         </div>
//                   </div>
//             </div>
//       )
// }

// export default ForgotPass;