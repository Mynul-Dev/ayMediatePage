import React from "react";
import WhyBharat from "./Components/whyBharat/WhyBharat";
import MeditationMadeSimple from "./Components/MeditationMadeSimple/MeditationMadeSimple";
import AboutBharat from "./Components/AboutBharat/AboutBharat";
import Himethods from "./Components/HiMethods/Himethods";
import PreFooter from "./Components/PreFooter/PreFooter";
import HeroSection from "./Components/HeroSection/HeroSection";

const YougaOffersPage = () => {
  return (
    <div>
      <HeroSection/>
      <WhyBharat />
      <MeditationMadeSimple />
      <AboutBharat />
      <Himethods />
      <PreFooter />
    </div>
  );
};

export default YougaOffersPage;
