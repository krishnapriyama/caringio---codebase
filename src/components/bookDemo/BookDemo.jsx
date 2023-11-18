import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const BookNow = ({ handleSubmission, handleResponse }) => {
  const [formData, setFormData] = useState({
    email: "",
    personName: "",
    schoolName: "",
    personType: "",
    phNo: "",
    schoolAddress: "",
    district: "",
    pincode: "",
    city: "",
    landmark: "",
  });
  const [errorsList, setErrorsList] = useState({
    email: "",
    personName: "",
    schoolName: "",
    personType: "",
    phNo: "",
    schoolAddress: "",
    district: "",
    pincode: "",
    city: "",
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phNo") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length !== value.length) {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "Phone Number should contain only numbers",
        }));
      } else if (numericValue.length <= "10") {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "",
        }));
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: numericValue,
        }));
      } else {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "Phone Number cannot exceed 10 digits",
        }));
      }
    } else if (e.target.name === "pincode") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length !== value.length) {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "Zip should contain only numbers",
        }));
      } else if (numericValue.length <= "6") {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "",
        }));
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: numericValue,
        }));
      } else {
        setErrorsList((prevData) => ({
          ...prevData,
          [e.target.name]: "Zip code cannot exceed 10 digits",
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiEndpoint = "http://StsBackend-env.eba-iqaiswiv.ap-south-1.elasticbeanstalk.com:8080/api/v1/leadRegistration/createLeadRegistration";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response from API:", responseData);
        handleSubmission();
        handleResponse("Request submitted");
        setFormData({
          email: "",
          personName: "",
          schoolName: "",
          personType: "",
          phNo: "",
          schoolAddress: "",
          district: "",
          pincode: "",
          city: "",
          landmark: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        handleSubmission(true);
        handleResponse("Some Error Occured");
      });
  };

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <Paper
        sx={{
          padding: "20px",
          maxWidth: "700px",
          width: "100%",
          margin: "auto",
          borderRadius: "8px",
        }}
        elevation={3}
      >
        <Typography variant="h5" gutterBottom>
          Register Your School with Caringio
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr", // Single column on smaller screens
              gap: "10px",
              "@media (min-width: 900px)": {
                gridTemplateColumns: "1fr 1fr", // Two columns on larger screens
              },
            }}
          >
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="Name"
              name="personName"
              variant="outlined"
              margin="normal"
              required
              value={formData.personName}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phNo"
              variant="outlined"
              margin="normal"
              required
              error={errorsList.phNo}
              helperText={errorsList.phNo}
              inputProps={{
                inputMode: "numeric",
                maxLength: 10,
              }}
              value={formData.phNo}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />

            <FormControl
              fullWidth
              style={{ margin: "8px 0px 4px 0px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">
                Person Type *
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.personType}
                label="Person Type"
                name="personType"
                onChange={handleChange}
                required
              >
                <MenuItem value={"Principal"}>Principal</MenuItem>
                <MenuItem value={"Parent"}>Parent</MenuItem>
                <MenuItem value={"Teacher"}>Teacher</MenuItem>
                <MenuItem value={"Staff"}>Staff</MenuItem>
                <MenuItem value={"School_Management"}>
                  School Management
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="School Name"
              name="schoolName"
              variant="outlined"
              margin="normal"
              value={formData.schoolName}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />


            <TextField
              fullWidth
              label="School Address"
              name="schoolAddress"
              variant="outlined"
              margin="normal"
              value={formData.schoolAddress}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="District"
              name="district"
              variant="outlined"
              margin="normal"
              value={formData.district}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              variant="outlined"
              margin="normal"
              error={errorsList.pincode}
              helperText={errorsList.pincode}
              value={formData.pincode}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              variant="outlined"
              margin="normal"
              value={formData.city}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />
            <TextField
              fullWidth
              label="Land Mark"
              name="landmark"
              variant="outlined"
              margin="normal"
              value={formData.landmark}
              onChange={handleChange}
              size="small"
              sx={{
                margin: "8px 0px 4px 0px",
              }}
            />

          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "16px",
              fontSize: "16px",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
export default BookNow;