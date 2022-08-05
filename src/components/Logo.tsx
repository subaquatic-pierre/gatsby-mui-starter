import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Box from '@mui/material/Box';

interface Props {
  light?: boolean;
}

const Logo: React.FC<Props> = ({ light = false }: Props) => {
  return (
    <Box href="/" component="a">
      <StaticImage
        style={{ filter: light && 'invert(100%)' }}
        src="../static/images/brand/logo.svg"
        alt="Logo"
        layout="constrained"
      />
    </Box>
  );
};

export default Logo;
