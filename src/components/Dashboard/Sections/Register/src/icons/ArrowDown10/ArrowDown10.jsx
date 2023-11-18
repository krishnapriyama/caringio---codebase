import React from "react";
import styled from "styled-components";

const StyledArrowDown10 = styled.svg`
  .path {
    stroke: #8f8f8f;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const ArrowDown10 = ({ className }) => {
  return (
    <StyledArrowDown10
      className={`arrow-down-10 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M6 9L12 15L18 9" />
    </StyledArrowDown10>
  );
};
