import React from "react";
import { InputField } from "../../../../../../../../components/InputField";
import styled from "styled-components";

const StyledCell = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 12px 20px;
  position: relative;
  width: 100%;

  & .input-field-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    width: unset !important;
  }
`;

export const Cell = () => {
  return (
    <StyledCell>
      <InputField
        className="input-field-instance"
        enterInputText="Maryan Nivaas"
        enterTitle="Enter your name*"
        leftIcon={false}
        rightIcon={false}
        stateProp="clicked"
      />
      <InputField
        className="input-field-instance"
        enterTitle="Enter your mail id*"
        leftIcon={false}
        rightIcon={false}
        stateProp="default"
      />
    </StyledCell>
  );
};
