// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import AnimationContainer from './AnimationContainer';

export const wrapRootElement = ({ element }: any): any => {
  return <AnimationContainer>{element}</AnimationContainer>;
};
