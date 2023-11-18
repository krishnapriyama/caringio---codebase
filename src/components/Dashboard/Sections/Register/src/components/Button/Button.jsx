import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  gap: 10px;
  height: 40px;
  justify-content: center;

  padding: 0px 20px;
  position: relative;

  & .text-wrapper-2 {
    color: var(--white-100);
    font-family: var(--15-semibold-font-family);
    font-size: var(--15-semibold-font-size);
    font-style: var(--15-semibold-font-style);
    font-weight: var(--15-semibold-font-weight);
    letter-spacing: var(--15-semibold-letter-spacing);
    line-height: var(--15-semibold-line-height);
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  &.state-1-clicked {
    background-color: #ee5a00;
  }

  &.state-1-inactive {
    background-color: #00000033;
  }

  &.state-1-primary {
    background-color: var(--accent-100);
  }

  &.state-1-hover {
    background-color: var(--accent-100);
    box-shadow: 0px 1px 5px #ff6b0066;
  }
`;

export const Button = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "primary",
  });

  return (
    <StyledButton
      className={`button state-1-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper-2">Submit</div>
    </StyledButton>
  );
};

function reducer(state, action) {
  if (state.state === "primary") {
    switch (action) {
      case "click":
        return {
          state: "clicked",
        };

      case "mouse_enter":
        return {
          state: "hover",
        };
      default:
        return state;
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "primary",
        };

      case "click":
        return {
          state: "clicked",
        };
        default:
        return state;
    }
  }

  if (state.state === "clicked") {
    switch (action) {
      case "click":
        return {
          state: "primary",
        };
        default:
        return state;
    }
  }

  return state;
}

Button.propTypes = {
  stateProp: PropTypes.oneOf(["primary", "clicked", "inactive", "hover"]),
};
