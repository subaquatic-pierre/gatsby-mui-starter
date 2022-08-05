import React, { useEffect, useState } from 'react';

import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { NavItem } from 'types/Nav';

import NavDrawer from './NavDrawer';
import NavButton from './NavButton';
import Logo from 'components/Logo';

import useScrollPosition from 'hooks/useScrollPosition';

const drawerWidth = 300;

interface Props {
  navItems: NavItem[];
}

const Header: React.FC<Props> = ({ navItems }: Props) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [stickyHeader, setStickyHeader] = useState(false);

  const handleToggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (scrollPosition > 100) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  }, [scrollPosition]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'sticky',
        zIndex: theme.zIndex.appBar
      }}
    >
      <AppBar
        color={stickyHeader ? 'default' : 'secondary'}
        component="nav"
        sx={{
          boxShadow: stickyHeader ? theme.shadows[1] : 'none',
          transition: '0.5s ease',
          paddingTop: '0.2rem',
          paddingBottom: '0.2rem',
          [theme.breakpoints.down('sm')]: {
            boxShadow: theme.shadows[1],
            backgroundColor: theme.palette.background.default
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Mobile Box */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                  display: 'none'
                }
              }}
            >
              <Box sx={{ width: '12rem' }}>
                <Logo />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleToggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Box */}
            <Box
              sx={{
                transition: '0.5s',
                display: { xs: 'none', sm: 'block' },
                maxWidth: stickyHeader ? '200px' : '280px'
              }}
            >
              <Logo />
            </Box>
            <Box
              sx={{ marginLeft: 'auto', display: { xs: 'none', sm: 'block' } }}
            >
              {navItems.map((item, index) => (
                <NavButton key={index} item={item} invertColor={stickyHeader} />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleToggleDrawer}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <NavDrawer
            handleToggleDrawer={handleToggleDrawer}
            navItems={navItems}
          />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
