import React from "react";
import { BenefitsCard } from "../../components/BenefitsCard/BenefitsCard";
import styled from "styled-components";

const StyledSection = styled.div`
  align-items: center;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px 0px;
  position: relative;
  width: 100%;
  overflow: hidden;

  & .text-wrapper {
    align-self: stretch;
    color: #28221e;
    font-family: Inter;
    font-size: 46px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.92px;
    margin-top: -1px;
    position: relative;
    text-align: center;
  }

  & .container {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 40px;
    justify-content: center;
    padding: 20px 0px;
    position: relative;
  }

  & .benefits-card-instance {
    background-color: unset !important;
    border-radius: unset !important;
  }
`;

export const BenifitSection = () => {
  return (
    <StyledSection>
      <p className="text-wrapper">Benefits for school’s using Caringio</p>
      <div className="container">
        <BenefitsCard
          enterHeading="Heading goes here in this line, May be double line suites well"
          enterSubHeading="Sub heading"
          rectangleClassName="benefits-card-instance"
          stateProp="default"
        />
        <BenefitsCard
          enterHeading="Heading goes here in this line, May be double line suites well"
          enterSubHeading="Sub heading"
          rectangleClassName="benefits-card-instance"
          stateProp="default"
        />
        <BenefitsCard
          enterHeading="Heading goes here in this line, May be double line suites well"
          enterSubHeading="Sub heading"
          rectangleClassName="benefits-card-instance"
          stateProp="default"
        />
      </div>
    </StyledSection>
  );
};
