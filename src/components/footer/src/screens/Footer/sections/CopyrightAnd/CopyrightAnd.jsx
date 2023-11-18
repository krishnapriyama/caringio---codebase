import React from "react";
import styled from "styled-components";
import linkedin from "../../../../images/Linkedin.png";
import IG from "../../../../images/IG.png";
import Fb from "../../../../images/Fb.png";
import Twitter from "../../../../images/Twitter.png";


const StyledCopyrightAnd = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
  left: 260px;
  padding: 50px 0px;
  position: absolute;
  top: 457px;
  width: 1400px;

  & .frame-2 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 6px;
    position: relative;
  }

  & .frame-3 {
    border: 1px solid;
    border-color: #ffffff;
    border-radius: 42px;
    height: 16px;
    overflow: hidden;
    position: relative;
    width: 16px;
  }

  & .text-wrapper-4 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 2px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: right;
    top: -5px;
    white-space: nowrap;
    width: 10px;
  }

  & .p {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.2%; /* 19.23px */
    letter-spacing: -0.15px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .links-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 12px;
    position: relative;
  }

  & .follow-us-on {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    line-height: 22px;
    position: relative;
    width: 138px;
  }

  & .TW {
    align-items: center;
    border: 0.73px solid;
    border-color: #ffffff;
    border-radius: 72.82px;
    display: flex;
    gap: 7.28px;
    height: 40px;
    justify-content: center;
    overflow: hidden;
    padding: 27.67px 18.93px;
    position: relative;
    width: 40px;
  }

  & .linkedin-wrapper {
    align-items: center;
    display: flex;
    gap: 7.86px;
    height: 22px;
    margin-bottom: -18.67px;
    margin-left: -9.93px;
    margin-right: -9.93px;
    margin-top: -18.67px;
    padding: 1.57px;
    position: relative;
    width: 22px;
  }

  & .linkedin {
    align-items: center;
    align-self: stretch;
    background-color: var(--white-100);
    border-radius: 0.79px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 9.17px;
    justify-content: center;
    overflow: hidden;
    padding: 2.75px 1.83px;
    position: relative;
  }

  & .union {
    height: 13.01px;
    position: relative;
    width: 13.36px;
  }

  & .img {
    height: 40px;
    position: relative;
    width: 40px;
  }
`;

export const CopyrightAnd = () => {
  return (
    <StyledCopyrightAnd>
      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-4">c</div>
        </div>
        <p className="p">2023 Caringio Tech Private Limited</p>
      </div>
      <div className="links-2">
        <div className="follow-us-on">FOLLOW US ON</div>
        <div className="TW">
          <div className="linkedin-wrapper">
            <div className="linkedin">
              <img className="union" alt="Union" src={linkedin} />
            </div>
          </div>
        </div>
        <img className="img" alt="Tw" src={Twitter} />
        <img className="img" alt="Fb" src={Fb} />
        <img className="img" alt="Tw" src={IG} />
      </div>
    </StyledCopyrightAnd>
  );
};
