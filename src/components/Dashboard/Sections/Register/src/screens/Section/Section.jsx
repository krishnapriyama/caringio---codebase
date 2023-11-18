import React from "react";
import styled from "styled-components";
import { Frame } from "./sections/Frame/Frame";
import { Box } from "@mui/material";

const StyledSection = styled.div`
  background-color: var(--white-100);
  height: 662px;
  position: relative;
  width: 100%;

  & .container {
    background: linear-gradient(
      180deg,
      rgb(251, 159, 28) 0%,
      rgb(232, 140, 9) 34.89%,
      rgb(232, 84, 9) 100%
    );
    height: 574px;
    width: 100%;
  }

  & .overlap-2 {
    height: 612px;
    position: relative;
  }
`;

export const Section = () => {
  return (
    <StyledSection>
      <div className="container">
        <Box sx={{ display: "flex", margin: "auto" }}>
          <Frame />
        </Box>
      </div>
    </StyledSection>
  );
};