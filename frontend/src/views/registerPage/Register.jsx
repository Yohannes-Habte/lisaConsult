import React, { useState, useContext, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { myContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { BsCheck2All } from 'react-icons/bs';
import './Register.scss';

const Register = () => {
  // to navigate register page
  const navigate = useNavigate();

  // Register state variables
  const {
    setUser,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    displayPassword,
    displayConfirmPassword,
  } = useContext(myContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [agreeChanged, setAgreeChanged] = useState(false);

  // useRef() Hook for the agreement checkbox
  const agreeError = useRef();

  // State variables that shows the condition of the password requirements
  const [letterCase, setLetterCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  // Password strength checker icons
  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  // Function to switch icon
  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  useEffect(() => {
    // Check for uppercase and lowercase letters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setLetterCase(true);
    } else {
      setLetterCase(false);
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    // Check for special character
    if (password.match(/([!,%,@,#,^,*,?,_,~])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    // Check for password length
    if (password.length > 5) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  // Function that is used to update the state variables of the registration form
  const update = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'confirmEmail':
        setConfirmEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'showPassword':
        setShowPassword(false);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value);
        break;
      case 'showConfirmPassword':
        setShowConfirmPassword(false);
        break;
      case 'agree':
        setAgree(!agree);
        setAgreeChanged(true);
        break;
      default:
        break;
    }
  };

  // Function that handles consent of the user
  const checkboxAgree = () => {
    setAgreeChanged((prevAgree) => !prevAgree);
  };

  // useRef for the state variables
  const passwordRef = useRef();

  //Function handling Password validation
  const checkPasswordFormat = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/.test(
        password
      );
    if (passwordRegex) {
      passwordRef.current.className = 'errorInvisible';
      //passwordRef.current.style.display = "none"
    } else {
      passwordRef.current.className = 'errorVisible';
      //passwordRef.current.style.display = "block"
    }
  };

  // Function to reset all the state variables
  const resetAllEnteredData = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setConfirmEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgree(false);
    setAgreeChanged(false);
  };

  // Function to register the user
  const SubmitRegisteredUser = async (event) => {
    event.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      confirmEmail: confirmEmail,
      password: password,
      confirmPassword: confirmPassword,
    };

    const settings = {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('http://localhost:5000/register', settings);

    const result = await response.json();

    try {
      if (response.ok) {
        setUser(result.id);
        resetAllEnteredData();
        navigate('/login');
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main className="register-page">
      <div className="register-form-container">
        <fieldset className="register-field">
          <legend className="register-legend"> Register </legend>
          <form
            action=""
            onSubmit={SubmitRegisteredUser}
            className="register-form"
          >
            <div className="register-input-fields-container">
              <div className="register-first-name">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={update}
                  placeholder="First Name"
                />
              </div>

              <div className="register-last-name">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={update}
                  placeholder="Last Name"
                />
              </div>

              <div className="register-email">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={update}
                  placeholder="Email"
                />
              </div>

              <div className="register-confirmEmail">
                <input
                  type="email"
                  name="confirmEmail"
                  value={confirmEmail}
                  onChange={update}
                  placeholder="Confirm Email"
                />
              </div>

              <div className="register-password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={update}
                  placeholder="Password"
                />
                <span onClick={displayPassword} className="password-display">
                  {showPassword ? (
                    <AiFillEyeInvisible className="icon" />
                  ) : (
                    <AiFillEye className="icon" />
                  )}
                </span>
              </div>

              <div className="register-confirm-password">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={update}
                  placeholder="Confirm Password"
                />
                <span
                  onClick={displayConfirmPassword}
                  className="password-display"
                >
                  {' '}
                  {showConfirmPassword ? (
                    <AiFillEyeInvisible />
                  ) : (
                    <AiFillEye />
                  )}{' '}
                </span>
              </div>
            </div>

            <div className="cosent-and-others-container">
              <div className="consent-terms-button-login-container">
                <div className="register-consent">
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={update}
                    className="register-consent-input"
                  />
                  <span>I accept</span>
                  <NavLink> Terms of Use</NavLink>
                </div>
                <button className="register-button"> Register </button>
                <p className="haveAccount">
                  Already have an account?{' '}
                  <NavLink to="/login"> Log In </NavLink>
                </p>
              </div>

              <div className="password-preconditions">
                <aside className="password-checkbox">
                  <h3>Checking Password Confirmation</h3>
                  <p className="text">
                    {switchIcon(letterCase)} &nbsp; Lowercase & UpperCase
                  </p>

                  <p className="text">
                    {switchIcon(number)} &nbsp; Number (0-9)
                  </p>

                  <p className="text">
                    {switchIcon(specialCharacter)} &nbsp; Spceial Character
                    (!%@#^*?_~)
                  </p>

                  <p className="text">
                    {switchIcon(passwordLength)} &nbsp; Minimum 6 Characters
                  </p>
                </aside>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </main>
  );
};

export default Register;
