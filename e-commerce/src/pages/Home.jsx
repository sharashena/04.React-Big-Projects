import React from "react";
// import components
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Subscription />
    </>
  );
};

export default Home;
