import React from "react";
import { CheckBoxWrapper } from "../../../../../../../../components/CheckBoxWrapper/CheckBoxWrapper";
import styled from "styled-components";

const StyledNamecandidateNameCellScore10001 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 10px;
  height: 59px;
  padding: 11px 20px;
  position: relative;
  width: 100%;

  & .by-clicking-submit {
    color: transparent;
    flex: 1;
    font-family: "Inter", Helvetica;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.13px;
    line-height: 19.5px;
    margin-bottom: -1px;
    margin-top: -1px;
    position: relative;
  }

  & .span {
    color: #271101;
    font-family: var(--13-regular-font-family);
    font-size: var(--13-regular-font-size);
    font-style: var(--13-regular-font-style);
    font-weight: var(--13-regular-font-weight);
    letter-spacing: var(--13-regular-letter-spacing);
    line-height: var(--13-regular-line-height);
  }

  & .text-wrapper-4 {
    color: #e85409;
    text-decoration: underline;
  }
`;

export const NamecandidateNameCellScore10001 = () => {
  return (
    <StyledNamecandidateNameCellScore10001>
      <CheckBoxWrapper />
      <p className="by-clicking-submit">
        <span className="span">By clicking Submit, You agree to Caringio’s </span>
        <span className="text-wrapper-4">Terms of service</span>
        <span className="span"> and </span>
        <span className="text-wrapper-4">Privacy policy</span>
      </p>
    </StyledNamecandidateNameCellScore10001>
  );
};