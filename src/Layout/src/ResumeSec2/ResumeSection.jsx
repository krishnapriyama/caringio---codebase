import { Box,  Typography, styled } from '@mui/material'
import React from 'react'
import { ResumeCard2 } from './ResumeCard2';

const StyledLayout = styled(Box)({
    padding: '100px 360px'
});

const StyledTypography = styled(Typography)({
color: '#28221E',
textAlign: 'center',
width : '100%',
fontFamily: 'Inter',
fontSize: '46px',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: 'normal',
letterSpacing: '-0.92px',
marginBottom : '50px'
})



export const ResumeSection2 = () => {
  return (
    <StyledLayout>
        <StyledTypography> Building student's resume with Caringio right from their school </StyledTypography>
        <ResumeCard2 />
    </StyledLayout>
  )
}