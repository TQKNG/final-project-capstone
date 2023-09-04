import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function RecipeReviewCard({item}) {

  return (
    <Card sx={{ maxWidth: "100%", height: "400px",bgcolor:"#495E57", color:"whitesmoke" }}>
      <CardHeader
        title={item.title}
        subheader={item.sub}
        titleTypographyProps={{
          sx: {
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "whitesmoke"
          }
        }}
        subheaderTypographyProps={{
          sx: {
            color: "whitesmoke",
            fontWeight: 500,
          }
        }}
      />
      <CardMedia
        component="img"
        sx={{ height: 194, objectFit: 'cover' }} 
        height="194"
        image={item.url}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{color:"whitesmoke", maxHeight: '100px', overflow: 'hidden'}}>
         {item.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
