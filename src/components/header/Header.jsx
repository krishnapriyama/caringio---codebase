import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/whitelogo.png";
import ButtonGroup from "./ButtonGroup";

const StyledHeaderBox = styled(Box)({
  backgroundImage: "linear-gradient(90deg, #E87409 0%, #E85409 60.94%)",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  position: "sticky", // Make the header sticky
  top: 0, // Stick to the top of the viewport
  zIndex: 1000,
  marginBottom: "0px",
  padding: "0px 100px",
});

const styledHeaderTitle = styled(Typography)({
  color: '#FFF',
fontFamily: 'Baloo 2',
fontSize: '22px',
fontStyle: 'normal',
fontHeight: '600',
lineHeight: 'normal',
letterSpacing: '-0.11px',
});

const Header = () => {
  return (
    <StyledHeaderBox>
      <Box
        sx={{
          padding: "8px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50px", height: "40px", marginRight: "10px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "80%" }}
            />
          </Box>
          <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#FFFFFF", fontSize: '22px', fontHeight: '600' }}
        >
          CARINGIO
        </Typography>
        </Box>
        <ButtonGroup />
      </Box>
    </StyledHeaderBox>
  );
};

export default Header;