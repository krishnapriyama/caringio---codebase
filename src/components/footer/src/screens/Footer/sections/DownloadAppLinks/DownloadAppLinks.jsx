import React from "react";
import styled from "styled-components";
import Google from './Googleplay.png';
import AppStore from './AppStore.png'

const StyledDownloadAppLinks = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 14px;
  left: 1334px;
  position: absolute;
  top: 73px;

  & .text-wrapper-9 {
    color: #ffffff;
    font-family: var(--22-medium-font-family);
    font-size: var(--22-medium-font-size);
    font-style: var(--22-medium-font-style);
    font-weight: var(--22-medium-font-weight);
    letter-spacing: var(--22-medium-letter-spacing);
    line-height: var(--22-medium-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .logos {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 14px;
    position: relative;
  }

  & .google-play {
    height: 42.86px;
    position: relative;
    width: 150px;
  }

  & .app-store {
    height: 42.13px;
    position: relative;
    width: 150px;
  }
`;

export const DownloadAppLinks = () => {
  return (
    <StyledDownloadAppLinks>
      <p className="text-wrapper-9">Download the Caringio App now</p>
      <div className="logos">
        <img className="google-play" alt="Google play" src= {Google}/>
        <img className="app-store" alt="App store" src={AppStore} />
      </div>
    </StyledDownloadAppLinks>
  );
};
