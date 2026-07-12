import React from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServiceSection from "../components/services/ServiceSection";
import ProcessSection from "../components/services/ProcessSection";
import CTA from "../components/services/CTA";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceSection />
      <ProcessSection />
      <CTA />
    </>
  );
};

export default Services;