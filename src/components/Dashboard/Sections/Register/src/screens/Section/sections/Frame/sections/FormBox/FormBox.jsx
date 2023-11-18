import React from "react";
import { Button } from "../../../../../../components/Button";
import { Cell } from "./sections/Cell";
import { CellWrapper } from "./sections/CellWrapper";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { InputFieldWrapper } from "./sections/InputFieldWrapper/sections/InputFieldWrapper";
import { NamecandidateNameCellScore10001 } from "./sections/NamecandidateNameCellScore10001";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import styled from "styled-components";

export const StyledFormBox = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 3px 25px #00000026;
  display: flex;
  flex-direction: column;
  height: 572px;
  overflow-y: scroll;
  position: relative;
  width: 500px;

  & .header {
    align-items: center;
    align-self: stretch;
    background-color: transparent;
    display: flex;
    gap: 10px;
    height: 59px;
    justify-content: center;
    padding: 20px;
    position: relative;
    width: 100%;

    & .text-wrapper-9 {
      color: var(--primarydark);
      flex: 1;
      font-family: var(--24-medium-font-family);
      font-size: var(--24-medium-font-size);
      font-style: var(--24-medium-font-style);
      font-weight: var(--24-medium-font-weight);
      letter-spacing: var(--24-medium-letter-spacing);
      line-height: var(--24-medium-line-height);
      margin-bottom: -5px;
      margin-top: -7px;
      position: relative;
    }
  }

  & .button-wrapper {
    all: unset;
    align-items: center;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    height: 70px;
    left: 0;
    padding: 10px 20px 20px;
    position: absolute;
    top: 502px;
    width: 500px;

    & .button-instance {
      background-color: #e85409 !important;
      display: flex !important;
      flex: 1 !important;
      flex-grow: 1 !important;
    }
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const FormBox = () => {
  return (
    <StyledFormBox>
      <header className="header">
        <p className="text-wrapper-9">Register your school with Caringio</p>
      </header>
      <Cell />
      <CellWrapper />
      <InputFieldWrapper />
      <DivWrapper />
      <Div />
      <SectionComponentNode />
      <NamecandidateNameCellScore10001 />
      <button className="button-wrapper">
        <Button className="button-instance" stateProp="primary" />
      </button>
    </StyledFormBox>
  );
};
