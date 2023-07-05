import React from "react";
import { AboutData } from "../../data/Data";
import "./Procedure.scss";

const About = () => {
  return (
    <main className="about-page">
      <h1 className="about-page-title">
        How to Access All the Services in LisaConsult
      </h1>

      <section className="procedures-of-getting-services">
        {AboutData.map(({ heading, step1, step2, step3, step4 }) => {
          return (
            <article className="specific-service-procedure">
              <h3 className="sub-title">{heading}</h3>
              <p className="step"> {step1} </p>
              <p className="step"> {step2} </p>
              <p className="step"> {step3} </p>
              <p className="step"> {step4} </p>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default About;
