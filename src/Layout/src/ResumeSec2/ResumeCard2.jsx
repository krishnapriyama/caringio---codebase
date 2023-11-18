import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid;
  border-color:  rgba(0, 0, 0, 0.1);;
  border-radius: 22px;
  display: flex;
  gap: 55px;
  justify-content: center;
  overflow: hidden;
  padding: 40px 50px 40px 40px;
  position: relative;
  width: 1122px;

  & .image {
    height: 283.44px;
    object-fit: cover;
    position: relative;
    width: 400px;
  }

  & .text-wrapper {
    color: rgba(40, 34, 30, 1);
    flex: 1;
    font-family: "Inter-SemiBold", Helvetica;;
    font-size:28px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.56px;
    line-height: 126.52273178100586%;
    position: relative;
    text-align: center;
  }
`;

export const ResumeCard2 = () => {
  return (
    <StyledContainer>
      <img className="image" alt="resume" src="https://c.animaapp.com/BX8b3FzC/img/image-27@2x.png" />
      <p className="text-wrapper">
        Approved training partner under the scheme for market led fee-based services implemented by NSDC
      </p>
    </StyledContainer>
  );
};

