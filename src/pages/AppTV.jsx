// React
import React from "react";
// Common
import More from "../common/More";
import Hero from "../common/Hero";
import Benefits from "../common/Benefits";
// Components
import Download from "../components/AppTV/Download";
import Specifications from "../components/AppTV/Specifications";
import Pricing from "../components/AppTV/Pricing";
// Utils
import { appTVInfo } from "../utils/appTVInfo";
import AnimatedTV from "../components/AppTV/AnimatedTV";

const AppTV = () => {
  return (
    <>
      <Hero page="appTV" />
      <More />
      <Benefits info={appTVInfo}>
        <AnimatedTV />
      </Benefits>
      <Pricing />
      <Specifications />
      <Download />
    </>
  );
};

export default AppTV;
