import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  styled,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { StyledFormBox } from "./sections/FormBox/FormBox";
import { Container } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const styledHeadText = styled(Typography){
//   color: '#271101';
// fontFamily: 'Inter';
// fontSize: '24px';
// fontStyle: 'normal';
// fontWeight: '500';
// lineHeight: '128.2%'; /* 30.768px */
// letterSpacing: '-0.48px';
// };

const StyledHeadText = styled(Typography)`
  color: #271101;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30.768px;
  letter-spacing: -0.48px;
  margin-bottom: 10px;
`;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const apiEndpoint = "http://StsBackend-env.eba-iqaiswiv.ap-south-1.elasticbeanstalk.com:8080/api/v1/leadRegistration/createLeadRegistration";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(formData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log("Response from API:", responseData);
//       handleSubmission();
//       setFormData({
//         email: "",
//         personName: "",
//         schoolName: "",
//         personType: "",
//         phNo: "",
//         schoolAddress: "",
//         district: "",
//         pincode: "",
//         city: "",
//         landmark: ""
//       });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       handleSubmission(true);
//     });
// };

function RegistrationForm(props) {
  const [Agree, setAgree] = useState(true);
  
  const handleCheckBox = () => {
    setAgree(!Agree);
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    // Remove non-numeric characters
    const numericValue = event.target.value.replace(/\D/g, "");
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    setPhoneNumber(limitedValue);
  };

  const [pincode, setPincode] = useState("");

  const handlePincodeChange = (event) => {
    // Remove non-numeric characters
    const numericValue = event.target.value.replace(/\D/g, "");
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 6);
    setPincode(limitedValue);
  };
  return (
    <StyledFormBox>
      <StyledHeadText>Register your school with Caringio</StyledHeadText>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Enter your name*"
            defaultValue="Maryan Nivaas"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Enter your mail id*" type="email" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Person Type*" type="text" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  +91
                  <ArrowDropDownIcon />
                  <span style={{ marginLeft: "8px", marginRight: "8px" }}>
                    |
                  </span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Enter school name*" type="text" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Enter school address*" type="text" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="District" type="text" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Pincode"
           type="text" 
           value={pincode}
           onChange={handlePincodeChange}
           fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="City" type="text" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Landmark" type="text" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ display: "flex", flexDirection: "row" }}>
            <Checkbox 
            checked={Agree}
            onChange={handleCheckBox}
            />
            <Typography>
              <span style={{ color: "rgba(39,17,1,1)" }}>
                {" "}
                By clicking Submit, You agree to Caringio’s{" "}
              </span>
              <span style={{ color: "rgba(232,84,9,1)" }}>
                Terms of service
              </span>
              <span style={{ color: "rgba(39,17,1,1)" }}> and </span>
              <span style={{ color: "rgba(232,84,9,1)" }}>Privacy policy</span>
            </Typography>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="primary" disabled={!Agree}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </StyledFormBox>
  );
}

export default RegistrationForm;
