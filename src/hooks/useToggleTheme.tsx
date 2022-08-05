import { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext';

const useToggleTheme = () => {
  const toggleTheme = useContext(ThemeContext);
  return toggleTheme;
};

export default useToggleTheme;
