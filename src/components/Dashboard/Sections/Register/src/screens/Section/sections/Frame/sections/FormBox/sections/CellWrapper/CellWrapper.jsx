import React from "react";
import { InputField } from "../../../../../../../../components/InputField";
import { ArrowDown9 } from "../../../../../../../../icons/ArrowDown9/ArrowDown9";
import styled from "styled-components";

const StyledCellWrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 12px 20px;
  position: relative;
  width: 100%;

  & .design-component-instance-node {
    flex: 1 !important;
    flex-grow: 1 !important;
    width: unset !important;
  }

  & .input-field-2 {
    align-items: center;
    background-color: var(--white-100);
    border: 0.5px solid;
    border-color: var(--black-25);
    border-radius: 3px;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 12px;
    height: 41px;
    margin-bottom: -0.5px;
    margin-right: -0.5px;
    margin-top: -0.5px;
    padding: 0px 12px 0px 0px;
    position: relative;
    width: 100%;
  }

  & .frame-2 {
    align-items: center;
    background-color: var(--whitelight);
    border-color: var(--black-25);
    border-right-style: solid;
    border-right-width: 0.5px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    height: 40px;
    justify-content: center;
    padding: 0px 8px 0px 12px;
    position: relative;
  }

  & .text-wrapper-3 {
    color: var(--blacksecondary);
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .arrow-down-9 {
    height: 18px !important;
    position: relative !important;
    width: 18px !important;
  }
`;

export const CellWrapper = () => {
  return (
    <StyledCellWrapper>
      <InputField
        className="design-component-instance-node"
        enterTitle="Person Type*"
        leftIcon={false}
        stateProp="default"
      />
      <div className="input-field-2">
        <div className="frame-2">
          <div className="text-wrapper-3">+91</div>
          <ArrowDown9 className="arrow-down-9" />
        </div>
        <div className="text-wrapper-3">Phone number*</div>
      </div>
    </StyledCellWrapper>
  );
};