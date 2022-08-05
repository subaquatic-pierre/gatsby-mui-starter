import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SEO from '../SEO';

const meta = {
  title: 'Title',
  baseTitle: 'baseTitle',
  siteUrl: 'siteUrl',
  description: 'description',
  domain: 'domain',
  image: 'image'
};

describe('Test if the Copyright component is working as expected', () => {
  it('<Copyright /> matches snapshot', () => {
    const screen = render(<SEO meta={meta} />);
    expect(screen.container).toMatchSnapshot();
  });

  it('<Copyright /> renders without exploding', () => {
    const screen = render(<SEO meta={meta} />);
    expect(screen).toBeTruthy();
  });
});
