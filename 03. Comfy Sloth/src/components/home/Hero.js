import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="section-center hero-center">
        <article className="hero-content">
          <h1>
            Design Your <br /> Comfort Zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="products" className="btn">
            shop now
          </Link>
        </article>
        <article className="hero-img">
          <img src={heroBcg} alt="hero bcg" className="primary-img" />
          <img src={heroBcg2} alt="hero bcg 2" className="secondary-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
