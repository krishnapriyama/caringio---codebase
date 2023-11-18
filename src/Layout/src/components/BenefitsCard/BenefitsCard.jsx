import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import Benifit from "../../images/Benifit1.png";

const StyledBenefitsCard = styled.div`
  align-items: flex-start;
  overflow-x: hidden;
  background: #fff;
  box-shadow: 0px 2px 13px 0px rgba(133, 133, 133, 0.12);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  padding: 24px;
  position: relative;
  width: 400px;

  & .frame {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 6px;
    position: relative;
    width: 100%;
  }

  & .heading-goes-here-in {
    align-self: stretch;
    color: #28221e;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.2%; /* 28.204px */
    letter-spacing: -0.44px;
    margin-top: -1px;
    position: relative;
  }

  & .sub-heading {
    align-self: stretch;
    color: var(--blackprimary);
    font-family: var(--15-regular-font-family);
    font-size: var(--15-regular-font-size);
    font-style: var(--15-regular-font-style);
    font-weight: var(--15-regular-font-weight);
    letter-spacing: var(--15-regular-letter-spacing);
    line-height: var(--15-regular-line-height);
    position: relative;
  }

  & .rectangle {
    align-self: stretch;
    height: 352px;
    position: relative;
  }

  &.default {
    box-shadow: 0px 2px 13px #8585851f;
  }

  &.hover {
    box-shadow: 0px 2px 13px #00000026;
  }

  &.default .rectangle {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
  }
  &.hover .benifit-card {
    display : none;
  }

  &.hover .rectangle {
    color: var(--blackprimary);
    font-family: var(--15-regular-font-family);
    font-size: var(--15-regular-font-size);
    font-style: var(--15-regular-font-style);
    font-weight: var(--15-regular-font-weight);
    letter-spacing: var(--15-regular-letter-spacing);
    line-height: var(--15-regular-line-height);
  }
`;

export const BenefitsCard = ({
  subHeading = true,
  enterSubHeading = "Sub heading",
  enterBodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, neque nec consectetur bibendum, massa odio luctus sapien, vel elementum tortor lectus id justo. Integer ut risus vel odio posuere fermentum. Nunc vehicula, libero sed feugiat viverra, metus mi scelerisque lorem, in eleifend quam urna eu lectus. Sed eget justo eget nisi efficitur consequat. Vestibulum eu mi vel tortor tincidunt facilisis. Cras venenatis, libero eget consectetur blandit, justo dui egestas lorem, nec tincidunt tortor tortor id dui. Nullam sed diam a quam consequat gravida.\n\nQuisque a dui et urna facilisis viverra. Sed non justo tristique, aliquam mi a, blandit felis. Sed sed erat at ipsum blandit tristique. ",
  enterHeading = "Heading goes here in this line, May be double line suites well",
  stateProp,
  rectangleClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <StyledBenefitsCard
      className={`benefits-card ${state.state}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="frame">
        <p className="heading-goes-here-in">{enterHeading}</p>
        {subHeading && <div className="sub-heading">{enterSubHeading}</div>}
      </div>
      <div className={`rectangle ${rectangleClassName}`}>
        <img className="benifit-card" alt="App store" src={Benifit} />
        {state.state === "hover" && <p className="p">{enterBodyText}</p>}
      </div>
    </StyledBenefitsCard>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
    default : 
     return state
  }

}

BenefitsCard.propTypes = {
  subHeading: PropTypes.bool,
  enterSubHeading: PropTypes.string,
  enterBodyText: PropTypes.string,
  enterHeading: PropTypes.string,
  stateProp: PropTypes.oneOf(["hover", "default"]),
};
