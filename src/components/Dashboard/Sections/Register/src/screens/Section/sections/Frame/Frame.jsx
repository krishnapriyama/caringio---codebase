import React from "react";
import styled from "styled-components";
import { Group } from "./sections/Group";
import RegistrationForm from "./RegistrationForm";

const StyledFrame = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 60px;
  left: 0;
  position: absolute;
  top: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    gap: 0px;
  }
`;

export const Frame = () => {
  return (
    <StyledFrame>
      <Group />
      <RegistrationForm />
    </StyledFrame>
  );
};
