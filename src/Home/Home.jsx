import React from "react";
import Banner from "../Components/Banner/Banner";
import StatsSection from "../Components/StatsSection/StatsSection";
import Services from "../Components/Services/Services";
import HealthCareSection from "../Components/HealthCareSection/HealthCareSection";
import Testimonial from "../Components/Testimonial/Testimonial";
import Faq from "../Components/Faq/Faq";

const Home = () => {
  return (
    <>
      <Banner />
      <StatsSection />
      <HealthCareSection />
      <Services />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
