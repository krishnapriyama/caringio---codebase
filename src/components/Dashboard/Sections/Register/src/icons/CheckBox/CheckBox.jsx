import React from "react";
import styled from "styled-components";

const StyledCheckBox = styled.svg`
  .rect {
    fill: white;
  }
`;

export const CheckBox = ({ className }) => {
  return (
    <StyledCheckBox
      className={`check-box ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="14.7" rx="3.35" width="14.7" x="0.65" y="0.65" />
      <rect
        className="rect"
        height="14.7"
        rx="3.35"
        stroke="#8F8F8F"
        strokeWidth="1.3"
        width="14.7"
        x="0.65"
        y="0.65"
      />
    </StyledCheckBox>
  );
};
