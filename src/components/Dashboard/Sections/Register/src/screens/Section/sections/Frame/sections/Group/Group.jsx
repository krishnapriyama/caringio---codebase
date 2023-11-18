import React from "react";
import styled from "styled-components";
import image25 from "../../../../../../img/image-25.png";
import image24 from "../../../../../../img/image-24.png";
import image23 from "../../../../../../img/image-23.png";

const StyledGroup = styled.div`
  height: 572px;
  position: relative;
  width: 804px;

  & .heading {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    left: 123px;
    position: absolute;
    top: 0;
  }

  & .india-s-first-real {
    
    color: #fff;
    text-align: center;
    text-shadow: 0px 1px 6px rgba(0, 0, 0, 0.06);
    /* 46/Bold */
    font-family: Inter;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.92px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    text-shadow: 0px 1px 6px #0000000f;
    width: 100%;
    margin-bottom: -20px
  }

  & .p {
    align-self: stretch;
    color: var(--white-100, #fff);
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
    line-height: normal;
    position: relative;
    text-align: center;
    text-shadow: 0px 1px 6px #0000000f;
  }

  & .overlap {
    height: 411px;
    left: 0;
    position: absolute;
    top: 161px;
    width: 100%;
  }

  & .overlap-group-wrapper {
    height: 406px;
    left: 118px;
    position: absolute;
    top: 0;
    width: fit-content;
  }

  & .overlap-group {
    height: 406px;
    position: relative;
  }

  & .image {
    height: 406px;
    left: 193px;
    position: absolute;
    top: 0;
    width: 247px;
  }

  & .img {
    height: 325px;
    left: 0;
    position: absolute;
    top: 16px;
    width: 227px;
  }

  & .image-2 {
    height: 285px;
    left: 386px;
    position: absolute;
    top: 49px;
    width: 177px;
  }

  & .bottom-box {
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 3px 25px #00000026;
    display: flex;
    height: 80px;
    justify-content: space-between;
    left: 0;

    padding: 10px 100px;
    position: absolute;
    top: 331px;
    width: 604px;
  }

  & .frame-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 12px;
    justify-content: center;
    position: relative;
  }

  & .text-wrapper-5 {
    color: #39a264;
    font-family: var(--18-bold-font-family);
    font-size: var(--18-bold-font-size);
    font-style: var(--18-bold-font-style);
    font-weight: var(--18-bold-font-weight);
    letter-spacing: var(--18-bold-letter-spacing);
    line-height: var(--18-bold-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-6 {
    color: var(--blackprimary);
    font-family: var(--13-regular-font-family);
    font-size: var(--13-regular-font-size);
    font-style: var(--13-regular-font-style);
    font-weight: var(--13-regular-font-weight);
    letter-spacing: var(--13-regular-letter-spacing);
    line-height: var(--13-regular-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-7 {
    color: #fc9100;
    font-family: var(--18-bold-font-family);
    font-size: var(--18-bold-font-size);
    font-style: var(--18-bold-font-style);
    font-weight: var(--18-bold-font-weight);
    letter-spacing: var(--18-bold-letter-spacing);
    line-height: var(--18-bold-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-8 {
    color: #e22d4c;
    font-family: var(--18-bold-font-family);
    font-size: var(--18-bold-font-size);
    font-style: var(--18-bold-font-style);
    font-weight: var(--18-bold-font-weight);
    letter-spacing: var(--18-bold-letter-spacing);
    line-height: var(--18-bold-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  @media (max-width: 768px) {
    .bottom-box {
      display: none;
    },
    margin : 0px;
    padding : 0px;
  }
`;

export const Group = () => {
  return (
    <StyledGroup>
      <div className="heading">
        <p className="india-s-first-real">
          India&#39;s first real-time school building software.
        </p>
        <p className="p">
          Learn industry-relevant skills with top tech veterans
        </p>
      </div>
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="image" alt="" src={image25} />
            <img className="img" alt="" src={image23} />
            <img className="image-2" alt="" src={image24} />
          </div>
        </div>
        <div className="bottom-box">
          <div className="frame-3">
            <div className="text-wrapper-5">126%</div>
            <div className="text-wrapper-6">Avg. CTC Hike</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-7">Top 1%</div>
            <div className="text-wrapper-6">Industry Instructors</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">900+</div>
            <div className="text-wrapper-6">Placement Partners</div>
          </div>
        </div>
      </div>
    </StyledGroup>
  );
};
