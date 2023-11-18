import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledInputField = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 7.28px;
  padding: 0px 14px;
  position: relative;

  & .enter-your-email {
    flex: 1;
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
    position: relative;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }

  & .span {
    color: #e88c09;
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }

  &.focused {
    border: 1px solid;
    border-color: var(--blacksecondary);
    height: 42px;
    width: 362px;
  }

  &.default {
    height: 40px;
    width: 360px;
  }

  &.hover {
    border: 1px solid;
    border-color: var(--white-100);
    height: 42px;
    width: 362px;
  }

  &.focused .enter-your-email {
    color: transparent;
  }

  &.default .enter-your-email {
    color: #8F8F8F;
  }

  &.hover .enter-your-email {
    color: #8F8F8F;
  }
`;

export const InputField = ({ stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <StyledInputField
      className={`input-field ${state.state}`}
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
      <div className="enter-your-email">
        {["default", "hover"].includes(state.state) && (
          <>Enter your email address</>
        )}

        {state.state === "focused" && (
          <>
            <p className="span-wrapper">
              <span className="text-wrapper">example@gmail.com</span>
            </p>
            <p className="span-wrapper">
              <span className="span">|</span>
            </p>
          </>
        )}
      </div>
    </StyledInputField>
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

      case "click":
        return {
          state: "focused",
        };
        default:
        return state;
    }
  }

  if (state.state === "focused") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
        default:
        return state;
    }
  }

  return state;
}

InputField.propTypes = {
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
