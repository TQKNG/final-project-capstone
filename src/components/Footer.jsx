// Footer.js
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed', // Fixed positioning
        bottom: 0, // Stick to the bottom
        width: '100%', // Full width
        backgroundColor: "whitesmoke",
        p: 6,
        textAlign:"center",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="/">
            Little Lemon
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}
