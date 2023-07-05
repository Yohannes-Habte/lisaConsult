import React from "react";
import { ResearchData } from "../../data/Data";
import "./Research.scss";

const Research = () => {
  return (
    <main className="researchPage">
      <section className="research-container">
        <h1 className="research-title"> Interdisciplinary Research </h1>
        <div className="research-items-container">
          {ResearchData.map(
            ({image, alt, heading, paragraph, articles: { article1, article2, article3 }}) => {
              return (
                <article className="research-items">
                  <figure className="image-container">
                    <img src={image} alt={alt} />
                  </figure>
                  <h2 className="research-article-title"> {heading} </h2>
                  <p className="research-paragraph"> {paragraph} </p>
                  <ol className="research-ordered-list">
                    <li> {article1} </li>
                    <li> {article2} </li>
                    <li> {article3} </li>
                  </ol>
                </article>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};

export default Research;
