import React, { useState, useRef, useContext } from "react";
import { myContext } from "../../App";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa"
import "./Login.scss";

const Login = () => {
  const { setUser, showPassword, setShowPassword, displayPassword } = useContext(myContext)
  const navigate = useNavigate();
  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation of the login form
  const [emailChange, setEmailChange] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  // useRef hook to focus on specific issues
  const emailRef = useRef();
  //const passwordRef = useRef();

  // Function handling Email Validation
  const checkEmailFormat = () => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if (emailRegex) {
      emailRef.current.className = "errorInvisible";
      //emailRef.current.style.display = "none"
    } else {
      emailRef.current.className = "errorVisible";
      //passwordRef.current.style.display = "block"
    }
  };

  // Function handling Password validation
  // const checkPasswordFormat = () => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  //   if (passwordRegex) {
  //     passwordRef.current.className = "errorInvisible";
  //     //passwordRef.current.style.display = "none"
  //   } else {
  //     passwordRef.current.className = "errorVisible";
  //     //passwordRef.current.style.display = "block"
  //   }
  // };

  // Function to update login user data
  const updateUserLoginData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        setEmailChange(true);
        break;
      case "password":
        setPassword(event.target.value);
        setPasswordChange(true);
        break;
      case "showPassword":
        setShowPassword(false);
        break;
      default:
        break;
    }
  };

  // Reset all state variables for the login form
  const resetVariables = () => {
    setEmail("");
    setEmailChange(false);
    setPassword("");
    setPasswordChange(false);
  };


  // Login and Submit Function
  const submitUserLogin = async (event) => {
    event.preventDefault();

    const newLoginUser = {
      email: email,
      password: password
    }

    // Setting for the fetch call
    const settings = {
      method: "POST",
      body: JSON.stringify(newLoginUser),
      headers: {
        "Content-Type": "application/json"
      }
    }

    // Fetch call to login user
    const response = await fetch("http://localhost:5000/login", settings);
    const result = await response.json();

    try{
      if(response.ok) {
        setUser(result.id);
        resetVariables(); 
        navigate("/courses");
      } else{
        throw new Error(result.message)
      }
    } catch(err){
      alert(err.message)
    }

  }

  return (
    <main className="lagin-page">
      <h1 className="login-title"> Welcome To Log In </h1>
      <div className="login-container">
          <figure className="login-icon-container">
            <FaUserAlt className="login-icon" />
          </figure>
        <fieldset className="login-fieldset">
        <legend className="login-legend">User Login </legend>
        <form onSubmit={submitUserLogin} className="login-form">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={updateUserLoginData}
              onBlur={checkEmailFormat}
              placeholder="Enter Email"
            />
            <div className={emailChange && email.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={emailRef}> 
              Email is required
            </div>
            <div className="errorInvisible" ref={emailRef} >
              Incorrect email format! 
            </div>
          </div>
          <div>
            <input
              type={showPassword? "text": "password"}
              name="password"
              value={password}
              onChange={updateUserLoginData}
              //onBlur={checkPasswordFormat}
              placeholder="Enter Password"
            />
            <span onClick={displayPassword} className="password-display"> {showPassword ? <AiFillEyeInvisible /> : <HiOutlineEye />} </span>
             {/** 
            <div className={passwordChange && password.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={passwordRef} >
              Password is required
            </div>
           
            <div className="errorInvisible" ref={passwordRef}>
              Password must be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.
            </div>

            */}
          </div>
          <div className="login-checkbox-forget-password">
            <div className="login-checkbox-keep-signed-in">
              <input type="checkbox" name="login" className="login-checkbox" />
              <span>Keep me signed in</span>
            </div>
            <div className="forget-password">
              <a href=""> Forget your password? </a>
            </div>
          </div>
          <button className="login-button"> Log In</button>
          <p className="haveNoAccount">
            Don't have an account? <NavLink to="/register">Sign Up</NavLink>
          </p>
        </form>
      </fieldset>
      </div>
      
    </main>
  );
};

export default Login;
