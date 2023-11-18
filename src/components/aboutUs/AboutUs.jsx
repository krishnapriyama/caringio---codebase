import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Box p={4} elevation={3}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          CARINGIO establishes a Communication Channel which Establish open and
          effective communication channels among school, staff and parents. A
          real time update to parents on their child's progress, upcoming
          events, Queries and any concerns that may arise, Encourage parents to
          reach out to teachers and school staff whenever needed.
        </Typography>
      </Box>
    </div>
  );
};

export default AboutUs;
