import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "100px" }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              Welcome to Little Lemon 🍋
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "monospace", fontWeight: 700 }}
            >
              The Essence of Greek Cuisine in the Heart of the City
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
              }}
            >
              At Little Lemon, we invite you to take a culinary journey through
              the rich tapestry of Greek cuisine, right here in the heart of the
              city. Our menu is a celebration of traditional recipes and modern
              innovation, all served with the warmth of Greek hospitality.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main", 
                  color: "white", 
                },
              }}
            >
              Reserve a table
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ md: "flex" }} flexGrow={1}>
            <img
              src="/greekSalad.jpg"
              alt="greek-salad"
              width="100%
            "
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
