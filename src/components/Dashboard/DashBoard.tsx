import React from "react";
import { Section } from "./Sections/Register/src/screens/Section/Section";
import CardBox from "./Sections/Transform/CardBox";
import { SoftwareSection } from "./Sections/Software/SoftwareSection";
import { BenifitSection } from "../../Layout/src/screens/Section/BenifitSection";
import { Testimonials } from "../../Layout/src/Testimonials/Testimonials";
import ResumeSection from "../../Layout/src/ResumeSection/ResumeSection";
import { UpskillSection } from "../../Layout/src/UpskillSection/UpskillSection";

export const DashBoardMain = () => {
  return (
    <div>
      <Section />
      <CardBox />
      <SoftwareSection />
      <BenifitSection />
      <Testimonials />
      <ResumeSection />
      <UpskillSection />
    </div>
  );
};
