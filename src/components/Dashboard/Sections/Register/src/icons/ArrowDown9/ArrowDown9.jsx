import React from "react";
import styled from "styled-components";

const StyledArrowDown9 = styled.svg`
  .path {
    stroke: #8f8f8f;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const ArrowDown9 = ({ className }) => {
  return (
    <StyledArrowDown9
      className={`arrow-down-9 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.5 6.75L9 11.25L13.5 6.75"
      />
    </StyledArrowDown9>
  );
};
