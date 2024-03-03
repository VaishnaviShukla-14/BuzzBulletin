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
                <h2>RESET PASSWORD</h2>
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