import React from "react";
import { HomePageTitleData } from "../../data/Data";
import { HomePageData } from "../../data/Data";

import "./Home.scss";

const Home = () => {
  return (
    <main className="home-page-container">
      <section className="investment-options">
        <h1 className="title-of-home-page"> {HomePageTitleData.heading} </h1>
        <p className="stock-market-home-page"> {HomePageTitleData.paragraph} </p>
        <figure className="stock-market-elements">
          <img src={HomePageTitleData.images.bitCoin} alt="Bitcoin" />
          <img src={HomePageTitleData.images.etheruem} alt="Ethereum" />
          <img className="real-estate" src={HomePageTitleData.images.realEsate} alt="Real Estate" />
          <img className="real-estate" src={HomePageTitleData.images.money} alt="Real Estate" />
        </figure>
      </section>

      <section className="stock-market-analysis">

          {HomePageData.map(({title, paragraph, image1, image2, image3, image4, alt1, alt2, alt3, alt4}, index) => {
            return (
              <section className="specific-environment-analysis-container" key={index}>
                <h3 className="sub-titles-of-home-page"> {title} </h3>
                <p className="paragraphs-environmental-analysis-home-page"> {paragraph} </p>
                <figure className="images-of-environmental-analysis">
                  <img src={image1} alt={alt1} />
                  <img src={image2} alt={alt2} />
                  <img src={image3} alt={alt3} />
                  <img src={image4} alt={alt4} />
                </figure>
              </section>
            )
            })}

      </section>

    </main>
  );
};

export default Home;
