import React, { useState, useContext, useRef } from "react";
import { myContext } from "../../App";
//import 'react-phone-number-input/style.css'
//import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input'
import "./CourseRegistration.scss";

const CourseRegistration = () => {
  // State Variables
  const { setUser, courses, setCourses } = useContext(myContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [profession, setProfession] = useState("");
  const [language, setLanguage] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [courseStart, setCourseStart] = useState("");
  const [consent, setConsent] = useState(false);
  const [validConsent, setValidConsent] = useState(false);

  // Format phone number value 
  const formatPhoneNumber = (value) => {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/, "");
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4 ) return phoneNumber;
    if(phoneNumberLength < 7 ) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
  }
  // Function to handle telephone inpute
  const handleTelephneNumberInput = event => {
    const formatted = formatPhoneNumber(event.target.value);
    setTelephone(formatted)
  }
  
 
 /*
  const [userData, setUserData] = useState({ firstName: "", lastName: "", birthDate: "", gender: "", email: "", telephone: "", profession: "", language: "", street: "", zipCode: "", city: "", state: "", country: "", course: "", courseStart: "", consent: false });

 const {firstName, lastName, birthDate, gender, email, telephone, profession, language, street, zipCode, city, state, country, course, courseStart, consent} = userData;

  // function that is used to update the state variables of the registration form
  const updateChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  */

 // function that is used to update the state variables of the registration form
  const updateChange = (event) => {
    switch(event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "birthDate":
        setBirthDate(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "telephone":
        setTelephone(event.target.value);
        break;
      case "profession":
        setProfession(event.target.value);
        break;
      case "language":
        setLanguage(event.target.value);
        break;
      case "street":
        setStreet(event.target.value);
        break;
      case "zipCode":
        setZipCode(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "state":
        setState(event.target.value);
        break;
      case "country":
        setCountry(event.target.value);
        break;
      case "course":
        setCourse(event.target.value);
        break;
      case "courseStart":
        setCourseStart(event.target.value);
        break;
      case "checkbox":
        setConsent(!consent);
        setValidConsent(true);
        break;
      default:
        break;
    }
  };

  // Function that handle course registration consent
const courseRegistrationConsent = () => {
  setValidConsent(prevConsent => !prevConsent)
}


  // Function that reset all the state variables
  const reset = () => {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setGender("");
    setEmail("");
    setTelephone("");
    setProfession("");
    setLanguage("");
    setStreet("");
    setZipCode("");
    setCity("");
    setState("");
    setCountry("");
    setCourse("");
    setCourseStart("");
    setConsent("");
  }

  // Function to sumit user registered for a course
  const sumbitCourseRegisteredUser = async (event) => {
    event.preventDefault();

    const newCourse = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      gender: gender,
      email: email,
      telephone: telephone,
      profession: profession,
      language: language,
      street: street,
      zipCode: zipCode,
      city: city,
      state: state,
      country: country,
      course: course,
      courseStart: courseStart
    }

    const settings = {
      method: "POST",
      body: JSON.stringify(newCourse),
      headers: {
        "Content-Type": "application/json"
      },
    };

    const response = await fetch("http://localhost:5000/courses", settings);
    const courseData = await response.json();

    try{
      if(response.ok) {
        setCourses([...courses, courseData.course]);
        reset("");
      } else{
        throw new Error(courseData.message)
      }
    }catch(err) {
      alert(err.message)
    }
  }

  return (
    <main className="course-registration-page">
      <h1 className="course-registration-title">Welcome to LisaConsult</h1>
      <fieldset className="course-registration-fieldset">
        <legend className="course-registration-legend">
          Course Registration Form
        </legend>
        <form onSubmit={sumbitCourseRegisteredUser} className="course-registration-form">
          <div className="course-registration-contact-detail">
            <h2>Contact Details</h2>
            <div>
              <input
                type="text"
                name="firstName"
                onChange={updateChange}
                value={firstName}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                onChange={updateChange}
                value={lastName}
                placeholder="Last Name"
              />
            </div>
            <div>
              <input 
                type="text" 
                name="birthDate"
                onChange={updateChange} 
                value={birthDate} 
                placeholder="Your Age" 
              />
            </div>

            <div>
              <input 
                type="text" 
                name="gender" 
                onChange={updateChange}
                value={gender}
                placeholder="Your Gender" 
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={updateChange} 
                value={email}
                placeholder="Email"
              />
            </div>

            <div>
              <input
                input="number"
                name="telephone"
                onChange={updateChange} 
                value={telephone}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <input
                type="text"
                name="profession"
                onChange={updateChange} 
                value={profession}
                placeholder="Profession"
              />
            </div>
            <div>
              <select name="language" onChange={updateChange} value={language}  >
                <option value="default">Select Language</option>
                <option value="english">English</option>
                <option value="deutch">Deutsch</option>
                <option value="tigrigna">Tigrigna</option>
                <option value="amharic">Amharic</option>
              </select>
            </div>
          </div>

          <div className="course-registration-residence-address-course">
            <div className="course-registration-residence-address">
              <h2>Residence Address</h2>
              <div>
                <input
                  type="text"
                  name="street"
                  onChange={updateChange} 
                  value={street}
                  placeholder="Street Address"
                />
              </div>

              <div>
                <input
                  type="number"
                  name="zipCode"
                  onChange={updateChange} 
                  value={zipCode}
                  placeholder="Postal/Zip Code"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  onChange={updateChange} 
                  value={city}
                  placeholder="City"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="state"
                  onChange={updateChange} 
                  value={state}
                  placeholder="State"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  onChange={updateChange} 
                  value={country}
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="course-registration-courses">
              <h2 className="course-registration-courses-title">Courses</h2>
              <div>
                <select name="course" onChange={updateChange}  value={course}>
                  <option value="default">Select Course</option>
                  <option value="website">Web Development</option>
                  <option value="investment">Investment</option>
                  <option value="onlineMarketing">Online Marketing</option>
                  <option value="leadership"> Leadership </option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="courseStart"
                  onChange={updateChange} 
                  value={courseStart}
                  placeholder="Starting Time"
                />
              </div>
            </div>
          </div>

          <div className="course-registration-consent-and-reset">
            <div className="course-registration-consent">
              <input
                className="checkbox-consent"
                type="checkbox"
                name="consent"
                onChange={updateChange}
                checked={courseRegistrationConsent.consent}
              />
              <span>
                I accept <span>Terms of Use</span>
              </span>
              <input onClick={reset} type="reset" className="reset" />
            </div>
          </div>

          <button className="course-registration-submit-btn">Submit</button>
        </form>
      </fieldset>
    </main>
  );
};

export default CourseRegistration;
