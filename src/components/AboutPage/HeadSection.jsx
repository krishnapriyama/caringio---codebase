import { Box } from "@mui/material";
import React from "react";
import HeadSectionImg from "../images/About/HeadSection.png";
import { SubTextStyled, SubheaderStyled } from "./AboutCard.styles";

const Text = {
  header: "Nurturing Education Through Innovation",
  subText:
    "At Carinigo, we believe that education is the foundation of a brighter tomorrow. Our mission is to revolutionize the educational landscape by providing innovative, user-friendly, and comprehensive student tracking solutions. ",
  sign: "- Surya (CEO & Founder of Caringio)",
};

const HeadSection = () => {
  return (
    <Box>
      <img src={HeadSectionImg} alt="" width= '100%'/>
      <Box
        sx={{
          display: "flex",
          height: "510px",
          width: "936px",
          padding: "60px 492px",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <SubheaderStyled>{Text.header}</SubheaderStyled>
        <SubTextStyled>{Text.subText}</SubTextStyled>
        <SubTextStyled>{Text.sign}</SubTextStyled>
      </Box>
    </Box>
  );
};

export default HeadSection;
