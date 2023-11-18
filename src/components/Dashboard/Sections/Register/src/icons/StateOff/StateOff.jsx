import React from "react";
import styled from "styled-components";

const StyledStateOff = styled.svg`
  .rect {
    fill: white;
  }

  .path {
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }

  .rect {
    stroke: #8f8f8f;
    stroke-width: 1.3;
  }
`;

export const StateOff = ({ className }) => {
  return (
    <StyledStateOff
      className={`state-off ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="14.7" rx="3.35" width="14.7" x="0.65" y="0.65" />
      <path
        className="path"
        d="M10.5 6.28125L7.0625 9.71875L5.5 8.15625"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
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
    </StyledStateOff>
  );
};
