import React from 'react';
import { Helmet } from 'react-helmet';

import { SiteMeta } from 'types/Site';

interface Props extends React.PropsWithChildren {
  meta: SiteMeta;
}

const SEO: React.FC<Props> = ({ meta }: Props) => {
  return (
    <Helmet>
      <title data-testid={meta.title}>
        {meta.title} | {meta.baseTitle}
      </title>
      <meta name="description" content={meta.description} />

      <meta property="og:url" content={meta.domain} />
      <meta property="og:type" content="website" />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={meta.domain} />
      <meta property="twitter:url" content={meta.domain} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Update logo icon */}
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" /> */}
    </Helmet>
  );
};

export default SEO;
