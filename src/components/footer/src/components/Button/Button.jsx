import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 96px;

  & .div-wrapper {
    align-items: center;
    justify-content: center;
    position: relative;
  }

  & .div {
    color: var(--black-100);
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .state-0-focused {
    background-color: var(--white-80);
    display: inline-flex;
    height: 37.5px;
    padding: 0px 13.12px;
  }

  & .state-0-default {
    background-color: #fff;
    display: flex;
    height: 40px;
    padding: 0px 14px;
    width: 96px;
  }

  & .state-0-hover {
    align-self: stretch;
    background-color: var(--whitelight);
    display: flex;
    flex: 1;
    flex-grow: 1;
    padding: 0px 13.12px;
    width: 100%;
  }

  & .div-wrapper.state-0-focused .div {
    font-family: "Inter", Helvetica;
    font-size: 13.1px;
    font-weight: 600;
    letter-spacing: -0.13px;
    line-height: 17.8px;
  }

  & .div-wrapper.state-0-default .div {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.14px;
    line-height: 19px;
  }

  & .div-wrapper.state-0-hover .div {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.14px;
    line-height: 19px;
  }
`;

export const Button = ({ stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <StyledButton
      className="button"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div-wrapper state-0-${state.state}`}>
        <div className="div">Subscribe</div>
      </div>
    </StyledButton>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
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
          state: "default",
        };
      default:
        return state;
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        state: "focused",
      };
    default:
      return state;
  }
}

Button.propTypes = {
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
