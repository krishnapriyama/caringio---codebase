import { styled } from '@mui/material/styles';
import React from 'react';
import CardSlider from './CardSlider';

const StyledCardsContainer = styled('div')`
  align-self: stretch;
  height: 507.53px;
  
  position: relative;
  width: 100%;
`;

const CardBox = () => {
  return (
    <StyledCardsContainer className="cards-container">
      <CardSlider />
    </StyledCardsContainer>
  );
}

export default CardBox;
