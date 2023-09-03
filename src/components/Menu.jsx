import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./MenuItems";

const myMenu = [
  {
    title: "Greek Bruchetta",
    sub: "A Mediterranean Twist",
    url: "/bruchetta.svg",
    desc: "Our Greek Bruschetta takes the classic Italian appetizer to new heights. We top a slice of crusty bread with a medley of juicy tomatoes, Kalamata olives, and crumbled feta cheese. Drizzled with extra virgin olive oil and sprinkled with oregano, this dish is a burst of Mediterranean flavors in every bite.",
  },
  {
    title: "Moussaka",
    sub: "The Quintessential Greek Casserole",
    url: "/moussaka.jpg",
    desc: " Moussaka is a rich, flavorful casserole made with layers of eggplant slices, cheese, and a meat sauce, topped with a thick béchamel sauce. It's a classic dish that embodies the essence of Greek comfort food.",
  },
  {
    title: "Souvlaki",
    sub: "Greece's Favorite Street Food",
    url: "souvlaki.jpg",
    desc: " Souvlaki features small pieces of skewered and grilled meat, often served in a pita wrap with garnishes and sauces. Whether it's chicken, pork, or lamb, Souvlaki is a versatile dish that's full of flavor.",
  },
];

const Menu = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "10px"}}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        Our Menu
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        {myMenu.map((item) => {
          return (
            <Grid item md={4} sm={12}>
              <RecipeReviewCard item={item}/>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Menu;
