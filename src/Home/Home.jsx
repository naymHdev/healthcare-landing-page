import React from "react";
import Banner from "../Components/Banner/Banner";
import StatsSection from "../Components/StatsSection/StatsSection";
import Services from "../Components/Services/Services";
import HealthCareSection from "../Components/HealthCareSection/HealthCareSection";

const Home = () => {
  return (
    <>
      <Banner />
      <StatsSection />
      <HealthCareSection />
      <Services />
    </>
  );
};

export default Home;
