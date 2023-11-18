import React from "react";
import { Mail, Phone, contactAddress, contactHeader } from "./utils";
import { Box, Typography } from "@mui/material";
import Contact from "../images/ContactUs/ContactUs.png";
import styled from "styled-components";
import { SubheaderStyled } from "../AboutPage/AboutCard.styles";
import map from "./map.png";

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;

const StyledBoxAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: flex-start;
  align-self: stretch;
`;
const StyledContactUsDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ContactUs = () => {
  return (
    <StyledContactUsDiv>
      <div>
        <img src={Contact} alt="" width={"100%"} />
      </div>
      <Box
        sx={{
          display: "flex",
          height: "510px",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <SubheaderStyled
          sx={{ textAlign: "center", fontSize: "42px" }}
          dangerouslySetInnerHTML={{
            __html: contactHeader,
          }}
        />
      </Box>
      <StyledBox>
        {/* horizontal */}
        <div style={{ padding: "0px 64px 0px 260px" }}>
          {" "}
          {/*vertical */}
          <StyledBoxAddress>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-0.92px",
              }}
            >
              {" "}
              Head office{" "}
            </Typography>
            <StyledBoxAddress>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: contactAddress,
                }}
              />
            </StyledBoxAddress>
            <Typography
              dangerouslySetInnerHTML={{
                __html: Phone,
              }}
            />
            <Typography
              dangerouslySetInnerHTML={{
                __html: Mail,
              }}
            />
          </StyledBoxAddress>
        </div>
        <div>
          <img src={map} alt="Map" style={{ padding: "0 84px 50px 0px" }} />
        </div>
      </StyledBox>
    </StyledContactUsDiv>
  );
};

export default ContactUs;
