import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'layout';
import Section from 'components/Section';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Modal from 'components/Modal';
import { useModal } from 'hooks';
import { SiteMeta } from 'types/Site';
import { PageProps } from 'gatsby';

interface Props extends PageProps<Props> {
  site: {
    meta: SiteMeta;
  };
}

const SomePage: React.FC<Props> = ({ data }: Props) => {
  const { site } = data;
  const [setComponent, setModalOpen] = useModal();

  const handleOpenModal = () => {
    setComponent(<Modal handleClose={() => setModalOpen(false)} />);
    setModalOpen(true);
  };

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
          <Button onClick={handleOpenModal}>Open Modal</Button>
          <Typography variant="h1">Cool Blog</Typography>
        </div>
      </Section>
    </Layout>
  );
};

export default SomePage;

export const query = graphql`
  query SomeQuery {
    site {
      meta: siteMetadata {
        title
        baseTitle
      }
    }
  }
`;
