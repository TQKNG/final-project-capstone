import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{
        padding:"10px"
    }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box>
            <Typography>Little Lemon</Typography>
            <Typography>Chicago</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium temporibus sed voluptate nobis quibusdam? Delectus,
              adipisci et ratione itaque repellat deleniti animi velit
              inventore. Culpa sunt ipsum alias sequi possimus.
            </Typography>
          </Box>
          <Box>
            <Button>Reserve a table</Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{md:"flex"}} flexGrow={1}>
            <img src="/greekSalad.jpg" alt="greek-salad" width="100%
            " />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
