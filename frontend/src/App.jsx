import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./views/procedurePage/Procedure";
import Contact from "./views/contactPage/Contact";
import Home from "./views/homePage/Home";
import Research from "./views/researchPage/Research";
import Courses from "./views/coursesPage/Courses";
import data from "./data/Data.json";
import Register from "./views/registerPage/Register";
import Login from "./views/loginPage/Login";
import CourseRegistration from "./views/courseRegistration/CourseRegistration";
import StripeSuccess from "./views/stripe/StripeSuccess";
import StripeCancel from "./views/stripe/StripeCancel";
import Footer from "./components/footer/Footer";

export const myContext = React.createContext();

const App = () => {
  const [user, setUser] = useState([]);
  const [ courses, setCourses ] = useState([]);
  const [ comments, setComments ] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [token, setToken] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

   // Function that display and hide the fonfirm password
   const displayConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState)
  }

  return (
    <myContext.Provider value={{data, user, setUser, courses, setCourses, comments, setComments, admin, setAdmin, token, setToken, filteredData, setFilteredData, inputText, setInputText, showPassword, setShowPassword, displayPassword, showConfirmPassword, setShowConfirmPassword, displayConfirmPassword}}>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/procedures" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courseRegistration" element={<CourseRegistration />} />
            <Route path="/stripe-success" element={<StripeSuccess />} />
            <Route path="/stripe-cancel" element={<StripeCancel />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </myContext.Provider>
  );
};

export default App;
