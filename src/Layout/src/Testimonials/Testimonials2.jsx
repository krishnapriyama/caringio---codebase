import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, styled, Box } from '@mui/material';
import Image from './images/ImageMale.png';
import Image2 from  './images/ImageFemale.png';
import Image3 from './images/ImageMale2.png';
import Image4 from './images/ImageFemale3.png';
import Image5 from './images/ImageFemale2.png';
import Image6 from './images/ImageFemale4.png';



const cardsData = [
  {
    image: Image,
    header: 'I would recommend Scaler Academy course to everyone who wants to revamp their career as they have an excellent curriculum which is coupled with a highly talented pool of instructors.',
    subheader: 'Nipun Suradkar',
  },
  {
    image: Image2,
    header: 'I was looking to make a move in my career. That’s when I heard about Scaler Academy! I immediately applied and started attending classes and got an offer from Amazon.',
    subheader: 'Bibhu Pala',
  },  {
    image: Image3,
    header: 'I was looking to make a move in my career. That’s when I heard about Scaler Academy! I immediately applied and started attending classes and got an offer from Amazon.',
    subheader: 'Bibhu Pala',
  },  {
    image: Image4,
    header: 'I was looking to make a move in my career. That’s when I heard about Scaler Academy! I immediately applied and started attending classes and got an offer from Amazon.',
    subheader: 'Bibhu Pala',
  },  {
    image: Image5,
    header: 'I was looking to make a move in my career. That’s when I heard about Scaler Academy! I immediately applied and started attending classes and got an offer from Amazon.',
    subheader: 'Bibhu Pala',
  },  {
    image: Image6,
    header: 'I was looking to make a move in my career. That’s when I heard about Scaler Academy! I immediately applied and started attending classes and got an offer from Amazon.',
    subheader: 'Bibhu Pala',
  },
];



const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  height: 192px;
  
`;

const StyledCardMedia = styled(CardMedia)`
  width: 0.5%; /* Adjust the width as needed */
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  margin: 42px 20px;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StyledCardContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Div = styled(Box)`
  align-items: flex-start;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 200px;
  padding
`;

const Div2 = styled(Box)`
  align-self: stretch;
  color:  #28221e;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 46px;
  font-weight: 600;
  letter-spacing: -0.92px;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    margin-top: 40px;
  }
`;



export const StyledSubHeader = styled(Typography)({
    fontFamily:'Inter',
    fontSize:'15px',
    fontSstyle:'normal',
    fontWeight:'500',
    lineHeight:'128.2%',
    letterSpacing:'-0.15px',
    color: '#271101',
  })

const Testimonials2 = () => {
  return (
    <Div>
    <Div2>Creating impact with 500+ parents feedback</Div2>
    
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              alt={card.image}
              image={card.image}
              height = '106px'
            //   width = '106px'
              //    src={require(`../images/About/${props.image}.png`
              />
            <StyledCardContent>
              <StyledSubHeader >{card.header}</StyledSubHeader>
              <StyledSubHeader  sx={{fontWeight : 600}}>
                {card.subheader}
              </StyledSubHeader>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
    </Div>
  );
};

export default Testimonials2;
