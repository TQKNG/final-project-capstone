import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Confirmation = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}>Thank you for your reservation</Typography>
      <Typography variant="h6">
        Below is your QR code. Please show this code to the hostess 15 minutes
        before your reservation time
      </Typography>
      <Box>
        <img src="/qr-code.png" alt="qrCode" />
      </Box>
    </Container>
  );
};

export default Confirmation;
