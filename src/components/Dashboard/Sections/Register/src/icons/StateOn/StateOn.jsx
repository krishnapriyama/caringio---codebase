import React from "react";
import styled from "styled-components";

const StyledStateOn = styled.svg`
  .rect {
    fill: #ff6b00;
  }

  .path {
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const StateOn = ({ className }) => {
  return (
    <StyledStateOn
      className={`state-on ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#FF6B00" height="16" rx="4" width="16" />
      <path
        className="path"
        d="M12.5 4.90625L6.3125 11.0938L3.5 8.28125"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledStateOn>
  );
};
