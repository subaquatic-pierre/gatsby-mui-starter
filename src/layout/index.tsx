import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';

import SEO from 'components/SEO';
import Header from 'components/HeaderNav';
import Footer from 'components/Footer';

import { initSmoothScroll } from 'utils/smoothScroll';

import 'static/css/main.css';
import 'static/js/main.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { SiteMeta } from 'types/Site';

interface Props extends React.PropsWithChildren {
  meta: SiteMeta;
}

const Layout: React.FC<Props> = ({ meta, children }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    initSmoothScroll();
  }, []);

  return (
    <>
      <CssBaseline />
      <SEO meta={meta} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
