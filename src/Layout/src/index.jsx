import React from "react";
import ReactDOMClient from "react-dom/client";
import { Testimonials } from "./Testimonials/Testimonials";
import ResumeSection from "./ResumeSection/ResumeSection";
import { UpskillSection } from "./UpskillSection/UpskillSection";
import ContactInfo from "./ContactUs/ContactInfo";
import { BenifitSection } from "./screens/Section/BenifitSection";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <div style={{ width: "100%", overflowX: "hidden" }}>
    <BenifitSection />
    <Testimonials />
    <ResumeSection />
    <UpskillSection />
    {/* <ContactInfo /> */}
  </div>
);
