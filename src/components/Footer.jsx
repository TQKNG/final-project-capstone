// Footer.js
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Box, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <Container maxWidth="xl" sx={{ bottom: "0px" }}>
      <Toolbar disableGutters sx={{ justifyContent: "center", gap:"5px" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#495E57",
          }}
        >
          All right reserved 
        </Typography>
        <Box sx={{ marginRight: "10px" }}>
          <img src="/Logo.svg" alt="Logo" />
        </Box>
      </Toolbar>
    </Container>
  );
}
