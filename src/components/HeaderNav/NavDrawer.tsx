import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Logo from 'components/Logo';

import { NavItem } from 'types/Nav';

import NavButton from './NavButton';

interface Props {
  navItems: NavItem[];
  handleToggleDrawer: () => void;
}
const NavDrawer: React.FC<Props> = ({
  navItems,
  handleToggleDrawer
}: Props) => {
  return (
    <Box onClick={handleToggleDrawer} sx={{ textAlign: 'center' }}>
      <Box sx={{ padding: '0.5rem', width: '12rem' }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: 'center' }}
          >
            <NavButton item={item} invertColor />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavDrawer;
