import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'layout';
import Section from 'components/Section';
import { PageProps } from 'gatsby';

import { SiteMeta } from 'types/Site';

import Typography from '@mui/material/Typography';

interface Props extends PageProps<Props> {
  site: {
    meta: SiteMeta;
  };
}

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const { site } = data;

  return (
    <Layout meta={site.meta}>
      <Section topSection fluid height={60}>
        <div
          style={{
            display: ' flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h1">Cool Blog</Typography>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogPageQuery {
    site {
      meta: siteMetadata {
        title
        baseTitle
      }
    }
  }
`;
