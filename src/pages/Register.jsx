import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageBanner from '../assets/banner1.jpg'


// local storage
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];


class User {
    constructor(name, email, password, phone) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    }
}
  
  
const Register = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");
    let navigate = useNavigate();

    const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value);
    };
    const passwordInputHandler = (e) => {
        setEnteredPassword(e.target.value);
    };
    const nameInputHandler = (e) => {
        setEnteredName(e.target.value);
    };
    const phoneInputHandler = (e) => {
        setEnteredPhone(e.target.value);
    };

    // validate function
    const validateData = () => {
        if (enteredName === "" || enteredEmail === "" || enteredPassword === "" || enteredPhone === "") {
            alert("Plese fill in all fields")
            return false
        }
        if (!enteredEmail.includes('@')) {
            alert("Invalid email format")
            return false
        } else if (enteredPassword.length < 4) {
            alert("Password has to be at least 4 characters")
            return false
        } else if (/^\d+$/.test(enteredPhone) === false) {
            alert("Phone number should only contains numbers")
            return false
        }
            
        for (let i = 0; i < userArr.length; i++) {
            if (enteredEmail === userArr[i].email) {
                alert("This user account has existed");
                return false
            }
        }
        return true
    }

    //click handler when clciking the sign up button
    const btnHanler = () => {
        const user = new User(
            enteredName,
            enteredEmail,
            enteredPassword,
            enteredPhone
        );
        const validateResult = validateData();
        if (validateResult) {
            userArr.push(user);
            saveLocalStorage("userArr", userArr);
            alert("Register successfully");
            return navigate("/login")
        }
    };

    //prevent form submitted
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div className='signin-signup-container' style={{'backgroundImage': `url(${ImageBanner})`}}>
            <div className='signin-signup-wrapper'>
                <div><h2>Sign Up</h2></div>
                <form onSubmit={submitHandler}>
                    <div><input placeholder='Full Name' onChange={nameInputHandler} value={enteredName}></input></div>
                    <div><input placeholder='Email' onChange={emailInputHandler} value={enteredEmail}></input></div>
                    <div><input placeholder='Password' type='password' onChange={passwordInputHandler} value={enteredPassword}></input></div>
                    <div><input placeholder='Phone' onChange={phoneInputHandler} value={enteredPhone}></input></div>
                    <div><button onClick={btnHanler} className='btn-signup btn btn-dark btn-block text-white'>SIGN UP</button></div>
                </form>
                <div>
                    <span>Login?</span>
                    <span><Link to='/login'>Click</Link></span>
                </div>
            </div>        
        </div>
    )
}

export default Register