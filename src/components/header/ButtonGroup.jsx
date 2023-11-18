import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// const viewTypeInput = document.getElementById("viewType");

// function updateViewType() {
//   const screenWidth = window.innerWidth;
//   const isMobile = screenWidth < 768; // Adjust the threshold as needed
//   viewTypeInput.value = isMobile ? "true" : "false";
// }

// // Initial update
// updateViewType();

// // Add an event listener for window resize
// window.addEventListener("resize", updateViewType);

const ButtonGroup = () => {
  return (
    <div>
      {/* {viewTypeInput.value}?  */}
      <div>
        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{
            marginRight: "5px",
            color: "#FFF",
            textTransform: "none"
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about-us"
          color="inherit"
          sx={{
            marginRight: "5px",
            color: "#FFF",
            textTransform: "none"
          }}
        >
          About
        </Button>
        {/* <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{
            marginRight: "5px",
            color: "#FFF",
          }}
        >
          Careers
        </Button> */}
        <Button
          component={Link}
          to="/contact-us"
          color="inherit"
          sx={{
            marginRight: "5px",
            color: "#FFF",
            textTransform: "none"
          }}
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
