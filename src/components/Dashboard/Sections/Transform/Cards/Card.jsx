import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
// import { styled } from "@mui/material";

const StyledCard = styled.div`
  align-items: flex-start;
  background-color: var(--white-100);
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  & .image {
    position: relative;
  }

  & .details {
    align-items: flex-start;
    background-color: var(--white-100);
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
  }

  & .heading-goes-here {
    align-self: stretch;
    color: var(--blackprimary);
    position: relative;
  }

  & .body-text {
    align-self: stretch;
    color: var(--blackprimary);
    position: relative;
  }

  & .text-button {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    align-self: stretch;
    background: linear-gradient(
      180deg,
      rgb(255, 137.7, 0) 3.86%,
      rgb(255, 107.1, 0) 100%
    );
    background-clip: text;
    color: transparent;
    position: relative;
    text-fill-color: transparent;
  }

  &.enlarged {
    border-radius: 8.54px;
    box-shadow: 0px 3px 20px #01010140;
  }

  &.default {
    border-radius: 8px;
    box-shadow: 0px 4px 26px #6b6b6b33;
  }

  &.enlarged .image {
    height: 185.64px;
    width: 332px;
  }

  &.default .image {
    height: 174.38px;
    width: 310px;
  }

  &.enlarged .details {
    gap: 12.81px;
    padding: 25.63px;
    width: 332px;
  }

  &.default .details {
    gap: 12px;
    padding: 24px;
    width: 310px;
  }

  &.enlarged .heading-goes-here {
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.16px;
    line-height: 20.5px;
    margin-top: -1.07px;
  }

  &.default .heading-goes-here {
    font-family: var(--15-semibold-font-family);
    font-size: var(--15-semibold-font-size);
    font-style: var(--15-semibold-font-style);
    font-weight: var(--15-semibold-font-weight);
    letter-spacing: var(--15-semibold-letter-spacing);
    line-height: var(--15-semibold-line-height);
    margin-top: -1px;
  }

  &.enlarged .body-text {
    font-family: "Inter", Helvetica;
    font-size: 14.9px;
    font-weight: 400;
    letter-spacing: -0.15px;
    line-height: 20.3px;
  }

  &.default .body-text {
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }

  &.enlarged .text-button {
    font-family: "Inter", Helvetica;
    font-size: 14.9px;
    font-weight: 600;
    letter-spacing: -0.15px;
    line-height: 20.3px;
  }

  &.default .text-button {
    font-family: var(--14-semibold-font-family);
    font-size: var(--14-semibold-font-size);
    font-style: var(--14-semibold-font-style);
    font-weight: var(--14-semibold-font-weight);
    letter-spacing: var(--14-semibold-letter-spacing);
    line-height: var(--14-semibold-line-height);
  }
`;

export const Card = ({
  textButton = "Know more",
  enterBodyText = "Real- time homework tracking is a system that allows students, parents, and educators to monitor and manage homework assignments in real - time through a digital platform. This technology enables users to view, submit, and receive updates on homework tasks, promoting organization and accountability in the learning process.",
  enterHeading = "Real-time homework tracking",
  stateProp,
  className,
  image = "/img/image.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <StyledCard
      className={`card ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {/* require(`../../images/About/${props.image}.png`) */}
      <img className="image" alt="" src={require(`./images/${image}`)} />
      <div className="details">
        <div className="heading-goes-here">{enterHeading}</div>
        <p className="body-text">{enterBodyText}</p>
        <div className="text-button">{textButton}</div>
      </div>
    </StyledCard>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "enlarged",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
    default:
      return {
        ...state,
        state: "enlarged",
      };
  }
}

Card.propTypes = {
  textButton: PropTypes.string,
  enterBodyText: PropTypes.string,
  enterHeading: PropTypes.string,
  stateProp: PropTypes.oneOf(["enlarged", "default"]),
  image: PropTypes.string,
};
