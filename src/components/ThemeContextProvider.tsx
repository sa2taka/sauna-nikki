import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import React, { useState } from 'react';
import { darkTheme } from './themes/darkTheme';
import { lightTheme } from './themes/lightTheme';

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<{
  theme: Theme;
  handleTheme: (theme: 'LIGHT' | 'DARK') => void;
}>({
  theme: darkTheme,
  handleTheme: () => {},
});

export const ThemeContextProvider: React.VFC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const handleTheme = (themeName: 'LIGHT' | 'DARK') => {
    localStorage.setItem('theme', themeName);
    switch (themeName) {
      case 'LIGHT':
        setTheme(lightTheme);
        break;
      case 'DARK':
        setTheme(darkTheme);
        break;
    }
  };
  return (
    <ThemeContext.Provider value={{ handleTheme: handleTheme, theme: theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
