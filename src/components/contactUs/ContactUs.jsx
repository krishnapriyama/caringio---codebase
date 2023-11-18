import { Grid, Typography, Link, Box, Paper } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  return (
    <Box p={4} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <LocationOnIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Caringio Technology Private Limited
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <MailOutlineIcon />
            </Grid>
            <Grid item>
              <Link href="mailto:admin@caringio.in">admin@caringio.in</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Phone Number: +91 8499946268
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
