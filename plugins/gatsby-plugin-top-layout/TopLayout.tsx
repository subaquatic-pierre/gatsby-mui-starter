import React from 'react';

import ThemeContextProvider from 'context/ThemeContext';
import NotificationContextProvider from 'context/NotificationContext';
import ModalContextProvider from 'context/ModalContext';

type Props = React.PropsWithChildren;

const TopLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <ModalContextProvider>
        <NotificationContextProvider>{children}</NotificationContextProvider>
      </ModalContextProvider>
    </ThemeContextProvider>
  );
};

export default TopLayout;
