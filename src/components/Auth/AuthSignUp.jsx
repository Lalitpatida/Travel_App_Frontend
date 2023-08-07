import "./Auth.css";
import { useAuth } from "../../context";
import {validateName,validateEmail, validateNumber, validatePassword} from "../../utils";

import {signupHandler} from "../../services";

let isNumberValid,isEmailValid,isPasswordValid,isNameValid,isConfirmPasswordValid;

export const AuthSignUp=()=>{

    const {username,email,password,confirmPassword, number,authDispatch }=useAuth();

console.log({username,email,password,confirmPassword, number});

const handleNumberChange=(event)=>{
     isNumberValid=validateNumber(event.target.value);
    if(isNumberValid){
        console.log("valid input");
        authDispatch({
            type:"NUMBER",
            payload:event.target.value,
        });
    }else{
        console.log("Invalid Number");
    }
};

const handleNameChange=(event)=>{
     isNameValid=validateName(event.target.value);
    if(isNameValid){
        console.log("valid input");
        authDispatch({
            type:"NAME",
            payload:event.target.value,
        });
    }else{
        console.log("Invalid Name");
    }
};

        const handleEmailChange=(event)=>{
             isEmailValid=validateEmail(event.target.value);
            if(isEmailValid){
                console.log("valid input");
                authDispatch({
                    type:"EMAIL",
                    payload:event.target.value,
                });
            }else{
                console.log("Invalid Email Address");
            }
        };

            const handlePasswordChange=(event)=>{
             isPasswordValid=validatePassword(event.target.value);
                if(isPasswordValid){
                    console.log("valid input");
                    authDispatch({
                        type:"PASSWORD",
                        payload:event.target.value,
                    });
                }else{
                    console.log("Invalid Password");
                }
            };

                const handleConfirmPasswordChange=(event)=>{
                     isConfirmPasswordValid=validatePassword(event.target.value);
                    if(isConfirmPasswordValid){
                        console.log("valid input");
                        authDispatch({
                            type:"CONFIRM_PASSWORD",
                            payload:event.target.value,
                        });
                    }else{
                        console.log("Invalid Password");
                    }
                };


const handleFormSubmit=(event)=>{
event.preventDefault();
if(isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
    signupHandler(username,number,email,password);
}
authDispatch({
    type:"CLEAR_USER_DATA",
})
};

    return (
     <div className="auth-container">
        <form onSubmit={handleFormSubmit}>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label"> Mobile Number<span className="asterisk">*</span></label>
                <input defaultValue={number}
                className="auth-input" 
                placeholder="Enter Mobile Number"
                type="number"
                maxLength={10}
                required
                onChange={handleNumberChange}></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Name<span className="asterisk">*</span></label>
                <input defaultValue={username}
                className="auth-input"
                 placeholder="Enter Name"
                 required onChange={handleNameChange}></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Email<span className="asterisk">*</span></label>
                <input defaultValue={email} 
                className="auth-input"
                 placeholder="Enter Email"
                 type="email"
                 required onChange={handleEmailChange}></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Password<span className="asterisk">*</span></label>
                <input defaultValue={password}
                 className="auth-input"
                 placeholder="Enter Password"
                 type="password"
                 required onChange={handlePasswordChange}></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Confirm Password<span className="asterisk">*</span></label>
                <input defaultValue={confirmPassword}
                 className="auth-input"
                 placeholder="Confirm Password"
                 type="password"
                 required onChange={handleConfirmPasswordChange}></input>
            </div>
            <div>
                <button className="button btn-primary btn-login cursor">Submit</button>
            </div>
        </form>
     </div>
    );
    
};