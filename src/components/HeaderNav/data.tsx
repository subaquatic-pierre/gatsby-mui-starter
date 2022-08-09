import React from 'react';
import FeedIcon from '@mui/icons-material/Feed';

import { NavItem } from 'types/Nav';

export const headerNavItems: NavItem[] = [
  {
    title: 'Blog',
    link: '/blog',
    icon: <FeedIcon />
  },
  {
    title: 'Some',
    link: '/some',
    icon: <FeedIcon />
  }
];
