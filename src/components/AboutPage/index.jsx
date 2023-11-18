import React from "react";
import { aboutList } from "./utils";
import AboutCard from "./AboutCard";
import { Box } from "@mui/material";
import HeadSection from "./HeadSection";

const AboutPage = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <HeadSection /> 
    <Box sx={{ display: "flex", flexDirection: "column" , width : '100%'}}>
      {aboutList.map((about) => ( <AboutCard header = { about.header } subText = { about.subText } alignDirection = { about.alignment} image = { about.image }/>))}
    </Box>
    </Box>
  );
};

export default AboutPage;