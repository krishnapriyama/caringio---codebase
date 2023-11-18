import { Box, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import BookNow from "../bookDemo/BookDemo";
import { content } from "../content";
import ContentCard from "../contentCard/ContentCard";
import main from "../../images/Main.gif";

const IndexPage = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          "@media (max-width: 900px)": {
            paddingTop: "20px",
            textAlign: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "auto",
            flexDirection: "column",
            "@media (min-width: 900px)": {
              flexDirection: "row",
              margin: "54px 36px",
              gap: "100px",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 2,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: "350px", alignItems: "center" }}>
              <img
                src={main}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "#000000" }} variant="h5">
                We Care For
              </Typography>
              <Typography variant="h2" gutterBottom sx={{ color: "#000000" }}>
                STUDENTS
              </Typography>
            </Box>
          </Box>

          <BookNow
            handleSubmission={() => {
              setIsSnackbarOpen(true);
            }}
            handleResponse={(response) => {
              setApiResponse(response);
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            padding: "40px",
            "@media (min-width: 900px)": {
              padding: "0px",
            },
          }}
        >
          <Typography variant="h4" sx={{ paddingBottom: "25px" }}>
            Key Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "70px",
            }}
          >
            {content.map((item, index) => (
              <ContentCard
                title={item.title}
                image={item.image}
                content={item.content}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={apiResponse}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{
          bottom: "20px",
          right: "20px",
        }}
      />
    </>
  );
};

export default IndexPage;
