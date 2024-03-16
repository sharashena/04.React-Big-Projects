import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section">
      <div className="section-center hero-center">
        <article className="hero-content">
          <h1 className="hero-title">We are changing the way people shop</h1>
          <p className="hero-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link to="products" className="btn hero-btn">
            our products
          </Link>
        </article>
        <Swiper className="hero-imgs">
          <SwiperSlide>
            <img src={hero1} alt="hero1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt="hero2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero3} alt="hero3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero4} alt="hero4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
