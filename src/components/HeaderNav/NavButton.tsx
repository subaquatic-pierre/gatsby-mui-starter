import React from 'react';

import { useTheme } from '@mui/material';

import Button from '@mui/material/Button';

import { NavItem } from 'types/Nav';

interface Props {
  item: NavItem;
  invertColor?: boolean;
}

const NavButton: React.FC<Props> = ({ item, invertColor }: Props) => {
  const theme = useTheme();
  return (
    <Button
      href={item.link}
      disableFocusRipple
      disableRipple
      startIcon={item.icon}
      sx={{
        '&:hover': {
          backgroundColor: 'inherit',
          color: theme.palette.primary.main
        },
        fontSize: '1.4rem',
        color: invertColor
          ? theme.palette.grey[800]
          : theme.palette.background.paper,
        [theme.breakpoints.up('sm')]: {
          marginLeft: '2rem'
        }
      }}
    >
      {item.title}
    </Button>
  );
};

export default NavButton;
