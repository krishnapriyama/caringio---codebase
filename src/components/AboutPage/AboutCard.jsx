import React from "react";
import { Box } from "@mui/material";
import {
  DirectionalBox,
  SubTextStyled,
  SubheaderStyled,
} from "./AboutCard.styles";

const AboutCard = (props) => {
  return (
    <DirectionalBox direction={props.alignDirection}>
      <Box>
        <img
          src={require(`../images/About/${props.image}.png`)}
          alt=""
          width="875px"
          height="510px"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "510px",
          padding: "60px 260px 60px 180px",
          alignItems: "flex-start",
          gap: "30px",
          flex: "1 0 0",
        }}
      >
        <SubheaderStyled>{props.header}</SubheaderStyled>
        <SubTextStyled
          dangerouslySetInnerHTML={{
            __html: props.subText,
          }}
        />
      </Box>
    </DirectionalBox>
  );
};

export default AboutCard;
