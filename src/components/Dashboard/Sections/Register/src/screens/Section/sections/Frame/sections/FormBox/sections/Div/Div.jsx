import React from "react";
import { InputField } from "../../../../../../../../components/InputField";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 12px 20px;
  position: relative;
  width: 100%;

  & .input-field-5 {
    flex: 1 !important;
    flex-grow: 1 !important;
    width: unset !important;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <InputField
        className="input-field-5"
        enterTitle="District"
        leftIcon={false}
        rightIcon={false}
        stateProp="default"
      />
      <InputField
        className="input-field-5"
        enterTitle="Pincode"
        leftIcon={false}
        rightIcon={false}
        stateProp="default"
      />
    </StyledDiv>
  );
};
