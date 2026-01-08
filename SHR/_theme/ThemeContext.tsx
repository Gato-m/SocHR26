import React, { createContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme, AppTheme } from './index';

export const ThemeContext = createContext<AppTheme>(lightTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState<AppTheme>(colorScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    });

    return () => listener.remove();
  }, []);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const colorScheme = Appearance.getColorScheme();
//   const [theme, setTheme] = useState<AppTheme>(colorScheme === 'dark' ? darkTheme : lightTheme);

//   useEffect(() => {
//     const listener = Appearance.addChangeListener(({ colorScheme }) => {
//       setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
//     });

//     return () => listener.remove();
//   }, []);

//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
// };
