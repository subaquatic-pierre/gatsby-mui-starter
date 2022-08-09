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
        {meta.title} - {meta.baseTitle}
      </title>
      <meta name="description" content={meta.description} />

      <link rel="canonical" href={meta.url} />

      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.baseTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={meta.url} />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* TODO:

        - Article modified time
        - Image width
        - Image height
        - Image type
        - Twitter : Label1
        - Twitter : Data1

      <meta
        property="article:modified_time"
        content="2022-07-26T10:48:10+00:00"
      />
      <meta property="og:image:width" content="370" />
      <meta property="og:image:height" content="168" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="13 minutes" />
      */}
    </Helmet>
  );
};

export default SEO;
