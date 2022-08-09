import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const IndexHero: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', height: '101vh' }}>
      <StaticImage
        style={{
          position: 'absolute',
          zIndex: -2,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
        objectFit="cover"
        src="../static/images/palmDubai.jpg"
        alt="hero index"
      />
      <Box
        sx={{
          zIndex: -1,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          left: 0,
          bottom: 0,
          top: 0,
          right: 0
        }}
      />
      <Container>
        <Grid
          sx={{
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white !important'
          }}
          container
        >
          <Grid item xs={6}>
            Left
          </Grid>
          <Grid item xs={6}>
            Right
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndexHero;
