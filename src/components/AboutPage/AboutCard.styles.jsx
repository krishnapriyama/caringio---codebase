import { Box, Typography, styled } from "@mui/material";

export const DirectionalBox = styled(Box)(({ direction }) => ({
  display: "flex",
  flexDirection: direction || "row",
  padding: "50px 0px",
  alignItems: "flex-start",
  alignSelf: "stretch",
}));

export const SubTextStyled = styled(Typography)({
  fontFamily: 'Inter',
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "128.2%",
  letterSpacing: "-0.48px",
});


export const SubheaderStyled = styled(Typography)({
  fontFamily:'Inter',
  fontSize:'46px',
  fontSstyle:'normal',
  fontWeight:'600',
  lineHeight:'normal',
  letterSpacing:'-0.92px',
  color: '#271101',
})