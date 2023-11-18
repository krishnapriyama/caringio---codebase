import React from "react";
import styled from "styled-components";
import logo from "../../../../../../../components/images/logo.png";

const StyledSmallDescription = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  left: 260px;
  position: absolute;
  top: 241px;
  width: 576px;

  & .logo {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 9px;
    position: relative;
  }

  & .rectangle-wrapper {
    align-items: center;
    background-color: #ffffff;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 40px;
    justify-content: center;
    overflow: hidden;
    padding: 13px 10px;
    position: relative;
    width: 40px;
  }

  & .rectangle {
    height: 30px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-right: -5px;
    margin-top: -8px;
    object-fit: cover;
    position: relative;
    width: 30px;
  }

  & .text-wrapper-5 {
    color: #ffffff;
    font-family: var(--22-medium-font-family);
    font-size: var(--22-medium-font-size);
    font-style: var(--22-medium-font-style);
    font-weight: var(--22-medium-font-weight);
    letter-spacing: var(--22-medium-letter-spacing);
    line-height: var(--22-medium-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-6 {
    align-self: stretch;
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.5px; /* 136.667% */
    letter-spacing: -0.15px;
    position: relative;
  }
`;

export const SmallDescription = () => {
  return (
    <StyledSmallDescription>
      <div className="logo">
        <div className="rectangle-wrapper">
          <img className="rectangle" alt="Rectangle" src={logo} />
        </div>
        <div className="text-wrapper-5">Caringio</div>
      </div>
      <p className="text-wrapper-6">
        Delve deep into the fascinating world of history and envision the
        possibilities that lie ahead. Through engaging content and insightful
        narratives, we strive to inspire curiosity, expand knowledge, and bridge
        the gap between the past and the future. Join us on this captivating
        journey as we unravel the mysteries of time.
      </p>
    </StyledSmallDescription>
  );
};
