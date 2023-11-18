import PropTypes from "prop-types";
import React, { useState } from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { ArrowDown9 } from "../../icons/ArrowDown9/ArrowDown9";

const StyledInputField = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 260px;

  & .div-2 {
    align-items: center;
    align-self: stretch;
    background-color: var(--white-100);
    border: 1.5px solid;
    border-color: var(--red-100);
    border-radius: 3px;
    box-shadow: 0px 2px 4px #ff1f0033;
    display: flex;
    gap: 10px;
    height: 43px;
    margin-left: -1.5px;
    margin-right: -1.5px;
    margin-top: -1.5px;
    padding: 0px 12px;
    position: relative;
    width: 100%;
  }

  & .arrow-down {
    height: 18px !important;
    position: relative !important;
    width: 18px !important;
  }

  & .title-container {
    align-items: center;
    background-color: var(--white-100);
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 8px;
    padding: 2px 4px;
    position: absolute;
    top: -11px;
  }

  & .title {
    color: var(--red-100);
    font-family: var(--11-regular-font-family);
    font-size: var(--11-regular-font-size);
    font-style: var(--11-regular-font-style);
    font-weight: var(--11-regular-font-weight);
    letter-spacing: var(--11-regular-letter-spacing);
    line-height: var(--11-regular-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 10px;
    position: relative;
  }

  & .text-goes-here {
    color: var(--black-100);
    flex: 1;
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .text-wrapper {
    align-self: stretch;
    color: var(--red-100);
    font-family: var(--11-regular-font-family);
    font-size: var(--11-regular-font-size);
    font-style: var(--11-regular-font-style);
    font-weight: var(--11-regular-font-weight);
    letter-spacing: var(--11-regular-letter-spacing);
    line-height: var(--11-regular-line-height);
    position: relative;
  }

  & .div-3 {
    align-items: center;
    align-self: stretch;
    background-color: var(--white-100);
    border-radius: 3px;
    display: flex;
    gap: 10px;
    padding: 0px 12px;
    position: relative;
    width: 90%;
  }

  & .title-wrapper {
    align-items: center;
    background-color: var(--white-100);
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    position: absolute;
  }

  & .title-2 {
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .clicked {
    border: 1.5px solid;
    border-color: var(--accent-100);
    box-shadow: 0px 2px 4px #ee5a0033;
    height: 43px;
    margin-bottom: -1.5px;
    margin-left: -1.5px;
    margin-right: -1.5px;
    margin-top: -1.5px;
  }

  & .hover {
    border: 1.5px solid;
    border-color: var(--accent-100);
    height: 43px;
    margin-bottom: -1.5px;
    margin-left: -1.5px;
    margin-right: -1.5px;
    margin-top: -1.5px;
  }

  & .default {
    border: 0.5px solid;
    border-color: var(--black-25);
    height: 41px;
    margin-bottom: -0.5px;
    margin-left: -0.5px;
    margin-right: -0.5px;
    margin-top: -0.5px;
  }

  & .with-data {
    border: 0.5px solid;
    border-color: var(--black-25);
    height: 41px;
    margin-bottom: -0.5px;
    margin-left: -0.5px;
    margin-right: -0.5px;
    margin-top: -0.5px;
  }

  & .error {
    border: 1.5px solid;
    border-color: var(--accent-100);
    height: 43px;
    margin-bottom: -1.5px;
    margin-left: -1.5px;
    margin-right: -1.5px;
    margin-top: -1.5px;
  }

  & .div-3.clicked .title-wrapper {
    left: 8px;
    padding: 2px 4px;
    top: -11px;
  }

  & .div-3.hover .title-wrapper {
    left: 10px;
    padding: 2px;
    top: 8px;
  }

  & .div-3.default .title-wrapper {
    left: 10px;
    padding: 2px;
    top: 8px;
  }

  & .div-3.with-data .title-wrapper {
    left: 8px;
    padding: 2px 4px;
    top: -11px;
  }

  & .div-3.error .title-wrapper {
    left: 10px;
    padding: 2px;
    top: 8px;
  }

  & .div-3.clicked .title-2 {
    color: var(--accent-100);
    font-family: var(--11-regular-font-family);
    font-size: var(--11-regular-font-size);
    font-style: var(--11-regular-font-style);
    font-weight: var(--11-regular-font-weight);
    letter-spacing: var(--11-regular-letter-spacing);
    line-height: var(--11-regular-line-height);
  }

  & .div-3.hover .title-2 {
    color: var(--blacksecondary);
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }

  & .div-3.default .title-2 {
    color: var(--blacksecondary);
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }

  & .div-3.with-data .title-2 {
    color: var(--blacksecondary);
    font-family: var(--11-regular-font-family);
    font-size: var(--11-regular-font-size);
    font-style: var(--11-regular-font-style);
    font-weight: var(--11-regular-font-weight);
    letter-spacing: var(--11-regular-letter-spacing);
    line-height: var(--11-regular-line-height);
  }

  & .div-3.error .title-2 {
    color: var(--blacksecondary);
    font-family: var(--14-regular-font-family);
    font-size: var(--14-regular-font-size);
    font-style: var(--14-regular-font-style);
    font-weight: var(--14-regular-font-weight);
    letter-spacing: var(--14-regular-letter-spacing);
    line-height: var(--14-regular-line-height);
  }
`;

export const InputField = ({
  enterInputText = "Text goes here",
  enterTitle = "Title*",
  leftIcon = true,
  rightIcon = true,
  stateProp,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "error",
  });
  const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (inputValue) => {
  //   // Update the input value in the component state
  //   setInputValue(inputValue);
  // };

  return (
    <StyledInputField
      className={`input-field ${className}`}
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
      {state.state === "error" && (
        <>
          <div className="div-2">
            {leftIcon && <ArrowDown9 className="arrow-down" />}

            <div className="title-container">
              <div className="title">{enterTitle}</div>
            </div>
            <div className="text-container">
              <div className="text-goes-here">{inputValue || enterInputText }</div>
            </div>
            {rightIcon && <ArrowDown9 className="arrow-down" />}
          </div>
          <div className="text-wrapper">Error message goes here</div>
        </>
      )}

      {["clicked", "default", "hover", "with-data"].includes(state.state) && (
        <div className={`div-3 ${state.state}`}>
          {leftIcon && <ArrowDown9 className="arrow-down" />}

          <div className="title-wrapper">
            <div className="title-2">{enterTitle}</div>
          </div>
          <div className="text-container">
            {["clicked", "with-data"].includes(state.state) && (
              <div className="text-goes-here">{inputValue || enterInputText }</div>
            )}
          </div>
          {rightIcon && <ArrowDown9 className="arrow-down" />}
        </div>
      )}
    </StyledInputField>
  );
};

function reducer(state, action) {
  if (state.state === "hover") {
    switch (action) {
      case "click":
        return {
          state: "clicked",
        };

      case "mouse_leave":
        return {
          state: "default",
        };
        default:
        return state;
    }
  }

  if (state.state === "clicked") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
        default:
        return state;
    }
  }

  if (state.state === "default") {
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

  return state;
}

InputField.propTypes = {
  enterInputText: PropTypes.string,
  enterTitle: PropTypes.string,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  stateProp: PropTypes.oneOf([
    "default",
    "with-data",
    "hover",
    "error",
    "clicked",
  ]),
};
