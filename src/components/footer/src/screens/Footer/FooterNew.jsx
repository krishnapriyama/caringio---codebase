import React from "react";
import styled from "styled-components";
import { CopyrightAnd } from "./sections/CopyrightAnd";
import { DownloadAppLinks } from "./sections/DownloadAppLinks/DownloadAppLinks";
import { Links } from "./sections/Links";
import { NewsLetter } from "./sections/NewsLetter/NewsLetter";
import { SmallDescription } from "./sections/SmallDescription";

const StyledFooter = styled.div`
  background-color: #271101;
  height: 655px;
  position: relative;
  width: 100%;
  // position: fixed;
  bottom: 0;
  // left: 0;
  margin-bottom: 0px;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
  }
  
`;

export const FooterNew = () => {
  return (
    <StyledFooter>
      <NewsLetter />
      <Links />
      <SmallDescription />
      <DownloadAppLinks />
      <CopyrightAnd />
    </StyledFooter>
  );
};
