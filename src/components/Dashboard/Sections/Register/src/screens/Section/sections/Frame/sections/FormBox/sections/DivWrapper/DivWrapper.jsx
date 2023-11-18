import React from "react";
import { InputField } from "../../../../../../../../components/InputField";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 12px 20px;
  position: relative;
  width: 100%;

  & .input-field-4 {
    flex: 1 !important;
    flex-grow: 1 !important;
    width: unset !important;
  }
`;

export const DivWrapper = () => {
  return (
    <StyledDivWrapper>
      <InputField
        className="input-field-4"
        enterTitle="Enter school address*"
        leftIcon={false}
        rightIcon={false}
        stateProp="default"
      />
    </StyledDivWrapper>
  );
};
