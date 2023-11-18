import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const ContentCard = ({ title, image, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        width: 240,
        height: 300,
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.05)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        {isHovered ? (
          <>
            <Typography
              fontSize="18px"
              component="div"
              sx={{
                width: "100%",
              }}
            >
              {title}
            </Typography>
            <hr />
            <Typography
              fontSize="12px"
              sx={{
                width: "100%",
                marginTop: "16px",
              }}
            >
              {content}
            </Typography>
          </>
        ) : (
          <>
            <img
              src={require(`../images/services/${image}`)}
              alt={title}
              style={{ width: "100%" }}
            />
            <Typography
              fontSize="24px"
              component="div"
              sx={{
                width: "100%",
              }}
            >
              {title}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
