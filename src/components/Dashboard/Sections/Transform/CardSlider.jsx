import React, { useEffect, useState } from "react";
import { TransformCardContent } from "./Cards/utils";
import { Card } from "./Cards/Card";
import { styled } from "styled-components";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleChevronLeft);
library.add(faCircleChevronRight);

const StyledDiv = styled.div`
  padding: 150px 260px 150px 240px;
  @media (max-width: 768px) {
    padding: 48px 24px 48px 24px;
  }
`;

const StyledHeader = styled.header`
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;

  & .text-wrapper {
    color: var(--blackprimary);
    flex: 1;
    margin-top: -1px;
    position: relative;
    color: #27221e;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 42px;
    font-weight: 600;
    left: 0;
    letter-spacing: -0.92px;
    line-height: normal;
    top: 0;
  }

  & .pagination-btns {
    flex: 0 0 auto;
    position: relative;
  }
`;

const CardSlider = () => {
  const [firstVisibleCard, setFirstVisibleCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is in mobile range (e.g., less than 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftClick = () => {
    if (firstVisibleCard > 1) {
      setFirstVisibleCard(firstVisibleCard - 1);
    }
  };

  const handleRightClick = () => {
    if (firstVisibleCard < TransformCardContent.length - 3) {
      setFirstVisibleCard(firstVisibleCard + 1);
    }
  };
  if (isMobile) {
    return (
      <StyledDiv>
        <div>
          <StyledHeader>
            <p className="text-wrapper">
              The Caringio recipe to transform your school 🏫
            </p>
          </StyledHeader>
        </div>
        <div style={{ marginTop: "50px" }}>
          <div style={{ flex: "0 0 100%", transition: "0.5s" }}>
            <Card
              enterBodyText={
                TransformCardContent[firstVisibleCard - 1].subheading
              }
              enterHeading={TransformCardContent[firstVisibleCard - 1].heading}
              image={TransformCardContent[firstVisibleCard - 1].image}
              stateProp="default"
              textButton="Know more"
            />
          </div>
        </div>
      </StyledDiv>
    );
  }
  return (
    <StyledDiv>
      <div>
        <StyledHeader>
          <p className="text-wrapper">
            The Caringio recipe to transform your school 🏫
          </p>
          <div>
            <IconButton variant="outlined" onClick={handleLeftClick}>
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </IconButton>
            <IconButton variant="outlined" onClick={handleRightClick}>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                style={{ color: "#e88c09" }}
              />
            </IconButton>
          </div>
        </StyledHeader>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          marginTop: "50px",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={{ flex: "0 0 25%", transition: "0.5s" }}>
            <Card
              enterBodyText={
                TransformCardContent[firstVisibleCard + index - 1].subheading
              }
              enterHeading={
                TransformCardContent[firstVisibleCard + index - 1].heading
              }
              image={TransformCardContent[firstVisibleCard + index - 1].image}
              stateProp="default"
              textButton="Know more"
            />
          </div>
        ))}
      </div>
    </StyledDiv>
  );
};

export default CardSlider;
