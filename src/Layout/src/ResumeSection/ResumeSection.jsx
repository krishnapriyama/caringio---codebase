import React from "react";
import { ResumeCard } from "./ResumeCard";
import { styled } from "styled-components";

const Header = styled.div`
  color: #28221e;
  text-align: center;
  font-family: Inter;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.92px;
  width: 60%;
  .@media (max-width: 991px) {
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.2%; /* 28.204px */
    letter-spacing: -0.44px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: '100%
  padding: 100px 260px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const ResumeSection = () => {
  return (
    <StyledDiv>
      <Header>
        Building student's resume with Caringio right from their school
      </Header>
      <ResumeCard />
    </StyledDiv>
  );
};

export default ResumeSection;
