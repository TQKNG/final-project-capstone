import { Image } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <Image />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
