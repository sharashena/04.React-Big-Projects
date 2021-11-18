import React from "react";
// import router link
import { Link } from "react-router-dom";
// import image
import about from "../images/about.jpeg";
// import title
import Title from "../components/Title";
const About = () => {
  return (
    <>
      <section className="about-section header-section">
        <div className="section-center">
          {/* header */}
          <div className="navigates">
            <Link to="/">home</Link>
            <Link to="/about">
              <span> / </span>
              about
            </Link>
          </div>
        </div>
      </section>

      {/* content */}
      <section className="section about-content">
        <div className="section-center about-center">
          <div className="about-img">
            <img src={about} alt="about-img" />
          </div>
          <div className="about-info">
            <Title title="our story" />
            <div className="underline"></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
