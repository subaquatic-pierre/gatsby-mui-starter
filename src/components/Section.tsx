import React from 'react';
import { SxProps, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

interface Props extends React.PropsWithChildren {
  extraStyles?: SxProps;
  height?: number | string;
  fluid?: boolean;
  topSection?: boolean;
}

const Section: React.FC<Props> = ({
  children,
  height,
  extraStyles,
  topSection = false,
  fluid = false
}: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: height ? `${height}vh` : ``,
        paddingTop:
          topSection && `${Number(theme.mixins.toolbar.minHeight) + 8}px`,
        ...extraStyles
      }}
    >
      <Container maxWidth={fluid ? false : 'lg'}>{children}</Container>
    </Box>
  );
};

export default Section;
