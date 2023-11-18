import React from "react";
import styled from "styled-components";
import { CheckBox } from "../../icons/CheckBox/CheckBox";

const StyledCheckBoxWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 24px;
  justify-content: center;
  position: relative;
  width: 24px;

  & .check-box {
    height: 16px !important;
    position: relative !important;
    width: 16px !important;
  }
`;

export const CheckBoxWrapper = () => {
  return (
    <StyledCheckBoxWrapper>
      <CheckBox className="check-box" />
    </StyledCheckBoxWrapper>
  );
};