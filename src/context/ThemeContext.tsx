import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { lightTheme, darkTheme, type Theme } from '../styles/theme';

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: darkTheme,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? darkTheme : lightTheme;
    document.documentElement.setAttribute('data-theme', initial.mode);
    return initial;
  });
  const toggle = () => setTheme(t => t.mode === 'dark' ? lightTheme : darkTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.mode);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
