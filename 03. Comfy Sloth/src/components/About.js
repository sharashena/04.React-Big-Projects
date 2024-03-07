import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import aboutImg from "../assets/hero-bcg.jpeg";

const HeroPage = ({ title }) => {
  return (
    <main>
      <section className="section path-section">
        <div className="section-center path-center">
          <h3>
            <Link to="/" className="path">
              home
            </Link>{" "}
            / {title}
          </h3>
        </div>
      </section>
      <section className="section section-center page-about">
        <img src={aboutImg} alt="about image" className="about-img" />
        <article className="page-info">
          <div className="section-title about-title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
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
        </article>
      </section>
    </main>
  );
};

HeroPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroPage;
