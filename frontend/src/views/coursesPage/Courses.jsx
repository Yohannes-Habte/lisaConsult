import React from "react";
import { NavLink } from "react-router-dom";
import { ServiceData } from "../../data/Data";
import "./Courses.scss";

const Courses = () => {
  return (
    <main className="servicePage-container">
      <h1 className="service-page-title"> Available Courses in LisaConsult </h1>

      <div className="courses-container">
        {ServiceData.map(
          ({ courseTitle, firstParagraph, secondParagraph, link }) => {
            return (
              <section className="course">
                <h2 className="course-title"> {courseTitle} </h2>
                <div>
                  <p> {firstParagraph} </p>
                  <p> {secondParagraph} </p>
                  <div className="join-us-link-container">
                    <NavLink to="/courseRegistration" className="join-link"> {link} </NavLink>
                  </div>
                </div>
              </section>
            );
          }
        )}
      </div>
    </main>
  );
};

export default Courses;
