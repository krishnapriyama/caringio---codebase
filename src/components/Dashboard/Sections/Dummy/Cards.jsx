import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Cards() {
  const [firstVisibleCard, setFirstVisibleCard] = useState(1);
  const cardContent = ['a', 'b', 'c', 'd', 'e'];
  
  const handleLeftClick = () => {
    if (firstVisibleCard > 1) {
      setFirstVisibleCard(firstVisibleCard - 1);
    }
  };

  const handleRightClick = () => {
    if (firstVisibleCard < 5) {
      setFirstVisibleCard(firstVisibleCard + 1);
    }
  };

  return (
    <div>
      <div>
        <Button variant="contained" onClick={handleLeftClick}>Move Left</Button>
        <Button variant="contained" onClick={handleRightClick}>Move Right</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={{ flex: '0 0 25%', transition: '0.5s' }}>
            <Card>
              <CardContent>
                Card {cardContent[firstVisibleCard + index-1]}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
