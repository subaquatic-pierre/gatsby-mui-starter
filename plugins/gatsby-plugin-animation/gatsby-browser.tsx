// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import PageAnimation from './PageAnimation';

export const wrapRootElement = ({ element }: any): any => {
  return <PageAnimation>{element}</PageAnimation>;
};
