import React from "react";
import styled from "styled-components";
import img1 from "./images/Img1.png";
import img2 from "./images/Img2.png";
import img3 from "./images/Img3.png";

const StyledSection = styled.div`
  align-items: flex-start;
  background-color: var(--white-100);
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0px;
  position: relative;
  width: 100%;
  height: 574px;
  margin-top: 400px;
  margin-bottom: 100px;
  overflow: hidden;

  & .software-s-we-offer {
    align-self: stretch;
    color: var(--blackprimary);
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
    align-self: stretch;
    display: flex;
    flex-direction: row;
    gap: 40px;
    height: 574px;
    justify-content: center;
    position: relative;
    width: 100%;
    .@media(max-width: 991px) {
      flex-direction: column;
      height: 574px;
    }
  }

  & .card {
    background-color: #e6f2ff;
    border-radius: 12px;
    height: 395px;
    position: relative;
    width: 23%;
  }

  & .frame {
    align-items: center;
    background-color: var(--white-100);
    border-radius: 14px;
    box-shadow: 0px 3px 25px #0000001a;
    display: flex;
    gap: 10px;
    height: 340px;
    justify-content: center;
    left: 44px;
    overflow: hidden;
    padding: 12px;
    position: absolute;
    top: 204px;
    width: 340px;
  }

  & .rectangle {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
  }

  & .text-wrapper {
    color: #4a94e9;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.2%; /* 30.768px */
    letter-spacing: -0.48px;
    left: 37px;
    position: absolute;
    text-align: center;
    top: 29px;
    width: 80%;
    margin-bottom: 20px;
    
  }

  & .div {
    color: var(--blackprimary);
    font-family: var(--15-regular-font-family);
    font-size: var(--15-regular-font-size);
    font-style: var(--15-regular-font-style);
    font-weight: var(--15-regular-font-weight);
    letter-spacing: var(--15-regular-letter-spacing);
    line-height: var(--15-regular-line-height);
    left: 37px;
    position: absolute;
    text-align: center;
    top: 119px;
    width: 80%;
    margin: 30px 0;
  }

  & .card-2 {
    background-color: #f3e8fc;
    border-radius: 12px;
    height: 395px;
    position: relative;
    width: 23%;
  }

  & .p {
    color: #913ece;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.2%; /* 30.768px */
    letter-spacing: -0.48px;
    left: 37px;
    position: absolute;
    text-align: center;
    top: 29px;
    width: 80%;
  }

  & .card-3 {
    background-color: #fff3e3;
    border-radius: 12px;
    height: 395px;
    position: relative;
    width: 23%;
  }

  & .text-wrapper-2 {
    color: #fc9100;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.2%; /* 30.768px */
    letter-spacing: -0.48px;
    left: 37px;
    position: absolute;
    text-align: center;
    top: 29px;
    width: 80%;
  }
  @media (max-width: 768px) {
    padding: 48px 24px 48px 24px;
    .card-2 {
      display: none;
    }
    .card-3 {
      display: none;
    }
    .card {
      width: 90%;
    }
  }
`;

export const SoftwareSection = () => {
  return (
    <StyledSection>
      <div className="software-s-we-offer">Software&#39;s we offer</div>
      <div className="container">
        <div className="card">
          <div className="frame">
            <img className="rectangle" alt="Rectangle" src={img1} />
          </div>
          <p className="text-wrapper">
            Lorem ipsum dolor sit amet is a dummy text to show text style
          </p>
          <p className="div">
            Lorem ipsum dolor sit amet is a dummy text to show text style Lorem
            ipsum dolor sit amet is a dummy text to show text style
          </p>
        </div>
        <div className="card-2">
          <div className="frame">
            <img className="rectangle" alt="Rectangle" src={img2} />
          </div>
          <p className="text-wrapper">
            Lorem ipsum dolor sit amet is a dummy text to show text style
          </p>
          <p className="div">
            Lorem ipsum dolor sit amet is a dummy text to show text style Lorem
            ipsum dolor sit amet is a dummy text to show text style
          </p>
        </div>
        <div className="card-3">
          <div className="frame">
            <img className="rectangle" alt="Rectangle" src={img3} />
          </div>
          <p className="text-wrapper">
            Lorem ipsum dolor sit amet is a dummy text to show text style
          </p>
          <p className="div">
            Lorem ipsum dolor sit amet is a dummy text to show text style Lorem
            ipsum dolor sit amet is a dummy text to show text style
          </p>
        </div>
      </div>
    </StyledSection>
  );
};
