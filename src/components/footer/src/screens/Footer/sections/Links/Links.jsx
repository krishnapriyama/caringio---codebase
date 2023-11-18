import React from "react";
import styled from "styled-components";

const StyledLinks = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 100px;
  justify-content: flex-end;
  left: 1064px;
  position: absolute;
  top: 252px;

  & .frame {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: var(--15-medium-font-family);
    font-size: var(--15-medium-font-size);
    font-style: var(--15-medium-font-style);
    font-weight: var(--15-medium-font-weight);
    letter-spacing: var(--15-medium-letter-spacing);
    line-height: var(--15-medium-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-3 {
    color: #ffffff;
    font-family: var(--15-medium-font-family);
    font-size: var(--15-medium-font-size);
    font-style: var(--15-medium-font-style);
    font-weight: var(--15-medium-font-weight);
    letter-spacing: var(--15-medium-letter-spacing);
    line-height: var(--15-medium-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const  Links = () => {
  return (
    <StyledLinks>
      <div className="frame">
        <div className="text-wrapper-2">News</div>
        <div className="text-wrapper-3">Resources</div>
        <div className="text-wrapper-3">Moideen</div>
        <div className="text-wrapper-3">Amar Pors</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-2">India</div>
        <div className="text-wrapper-3">Canada</div>
        <div className="text-wrapper-3">United States</div>
        <div className="text-wrapper-3">Japan</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-2">About us</div>
        <div className="text-wrapper-3">Company</div>
        <div className="text-wrapper-3">Careers</div>
        <div className="text-wrapper-3">Blogs</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Cookies</div>
        <div className="text-wrapper-3">Terms</div>
        <div className="text-wrapper-3">Privacy</div>
        <div className="text-wrapper-3">Help</div>
      </div>
    </StyledLinks>
  );
};
