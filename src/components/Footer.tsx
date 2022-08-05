import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTheme } from '@mui/material';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Logo from 'components/Logo';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: '10rem',
          backgroundSize: 'cover',
          md: {
            backgroundPosition: 'left bottom -4rem',
            minHeight: '10rem',
            marginBottom: '1rem',
            marginTop: '-4rem'
          },
          backgroundPosition: 'left bottom -4rem'
        }}
      />
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.getContrastText(theme.palette.secondary.main),
          paddingBottom: '4rem'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Box width="250px">
                <Logo light />
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              display="flex"
              justifyContent="flex-end"
              flexDirection="column"
            >
              <Typography variant="body2">Cool Location</Typography>
            </Grid>
            <Grid
              item
              md={5}
              display="flex"
              justifyContent="flex-end"
              flexDirection="column"
            >
              <Typography variant="body2">Copyright © 2022 - Cool</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
