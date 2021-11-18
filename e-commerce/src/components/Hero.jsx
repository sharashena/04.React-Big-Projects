import React from "react";
// import router link
import { Link } from "react-router-dom";
// import styled hero
import { HeroSection } from "../styles/Hero";
// import title
import Title from "./Title";
// import images
import heroBcg from "../images/hero-bcg.jpeg";
import heroBcg2 from "../images/hero-bcg2.jpeg";

const Hero = () => {
  return (
    <>
      <HeroSection className="section">
        <div className="section-center hero-center">
          <div className="hero-content">
            <Title title="deisgn your comfort zone" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <button type="button" className="btn btn-primary hero-btn">
              <Link to="products">shop now</Link>
            </button>
          </div>
          <div className="img-content">
            <img src={heroBcg} alt="hero-bcg" />
            <img src={heroBcg2} alt="hero-bcg2" className="hero-bcg" />
          </div>
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
