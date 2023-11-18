import React from "react";
import { Button } from "../../../../components/Button";
import { InputField } from "../../../../components/InputField";
import styled from "styled-components";

const StyledNewsLetter = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  left: 260px;
  position: absolute;
  top: 60px;
  width: 660px;

  & .header {
    align-items: flex-start;
    background-color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    position: relative;
  }

  & .text-wrapper-7 {
    color: #ffffff;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.2%; /* 28.204px */
    letter-spacing: -0.44px;
    margin-top: -1px;
    position: relative;
    width: 660px;
  }

  & .text-wrapper-8 {
    align-self: stretch;
    color: #ffffff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.2%; /* 19.23px */
    letter-spacing: -0.15px;
    position: relative;
  }

  & .inut-field-container {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    position: relative;
  }
`;

export const NewsLetter = () => {
  return (
    <StyledNewsLetter>
      <header className="header">
        <div className="text-wrapper-7">Join our news letter</div>
        <p className="text-wrapper-8">
          We’ll send you a nice letter once per week. No spam
        </p>
      </header>
      {/* <div className="inut-field-container">
        <InputField stateProp="default" />
        <Button stateProp="default" />
      </div> */}
    </StyledNewsLetter>
  );
};
