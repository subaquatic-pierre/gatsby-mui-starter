import React from 'react';

import { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import getTheme from 'theme';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext(() => {});

type Props = React.PropsWithChildren;

const ThemeContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState('light');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleToggleTheme = () => {
    console.log('Theme mode toggled');
    setThemeMode(themeMode == 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <ThemeContext.Provider value={handleToggleTheme}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
