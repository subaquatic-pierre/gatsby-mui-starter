import { Helmet } from 'react-helmet';

import ThemeContextProvider from 'context/ThemeContext';
import React from 'react';

type Props = React.PropsWithChildren;

const TopLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Suspense fallback={<div />}>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </React.Suspense>
  );
};

export default TopLayout;
