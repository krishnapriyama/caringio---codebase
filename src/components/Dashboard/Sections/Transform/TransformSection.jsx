import React from "react";
import CardBox from "./CardBox";
// import { styled } from "@mui/material";
import styled from "styled-components";

const StyledSection = styled.div`
  align-items: flex-start;
  background-color: var(--white-100);
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 913.53px;
  padding: 150px 260px;
  position: relative;
  width: 1920px;
`;

const TransformSection = () => {
  return (
    <StyledSection>
      
      <CardBox />
    </StyledSection>
  );
};

export default TransformSection;
