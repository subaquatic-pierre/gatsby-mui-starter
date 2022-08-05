import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';

import { NavItem } from 'types/Nav';

export const headerNavItems: NavItem[] = [
  {
    title: '+971 (4) 427 37 81',
    link: 'tel:+971 (4) 427 37 81',
    icon: <LocalPhoneIcon />
  },
  {
    title: 'projects@codativity.com',
    link: 'mailto:projects@codativity.com',
    icon: <EmailIcon />
  },
  {
    title: 'Blog',
    link: '/blog',
    icon: <FeedIcon />
  }
];

export const footerav: NavItem[] = [];
