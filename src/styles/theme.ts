const baseTheme = {
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    sans: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
    display: "'Space Grotesk', 'Inter', sans-serif",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
  },

  lineHeights: {
    tight: 1.1,
    editor: 1.5,
    normal: 1.6,
    relaxed: 1.75,
  },

  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
  },

  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    hard: '0',
  },

  borders: {
    thin: '1px solid',
    thick: '2px solid',
    hard: '3px solid',
  },

  shadows: {
    hard: {
      sm: '2px 2px 0px',
      md: '4px 4px 0px',
      lg: '6px 6px 0px',
      xl: '8px 8px 0px',
    },
    soft: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.07)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  grid: {
    columns: 12,
    gutter: '1rem',
  },
} as const;

export const lightTheme = {
  ...baseTheme,
  mode: 'light' as const,
  
  colors: {
    background: {
      primary: '#FAFBFC',
      secondary: '#FFFFFF',
      tertiary: '#F6F8FA',
      code: '#F7F7F7',
      overlay: 'rgba(255, 255, 255, 0.9)',
    },
    
    text: {
      primary: '#24292E',
      secondary: '#586069',
      tertiary: '#6A737D',
      inverse: '#FFFFFF',
      code: '#032F62',
    },

    syntax: {
      keyword: '#D73A49',
      string: '#22863A',
      number: '#005CC5',
      comment: '#6A737D',
      function: '#6F42C1',
      variable: '#E36209',
      operator: '#D73A49',
      tag: '#22863A',
      attribute: '#005CC5',
      punctuation: '#24292E',
    },

    accent: {
      primary: '#0366D6',
      secondary: '#28A745',
      error: '#DC143C',
      warning: '#FFD700',
      info: '#0366D6',
      success: '#28A745',
    },

    brutal: {
      black: '#000000',
      white: '#FFFFFF',
      yellow: '#FFD700',
      blue: '#0066FF',
      red: '#FF0000',
      green: '#00FF00',
    },

    border: {
      default: '#E1E4E8',
      dark: '#D1D5DA',
      light: '#EAECEF',
      brutal: '#000000',
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  mode: 'dark' as const,
  
  colors: {
    background: {
      primary: '#1E1E1E',
      secondary: '#252526',
      tertiary: '#2D2D30',
      code: '#1A1A1A',
      overlay: 'rgba(30, 30, 30, 0.9)',
    },
    
    text: {
      primary: '#CCCCCC',
      secondary: '#9D9D9D',
      tertiary: '#7D7D7D',
      inverse: '#1E1E1E',
      code: '#D4D4D4',
    },

    syntax: {
      keyword: '#C678DD',   
      string: '#98C379',  
      number: '#D19A66',   
      comment: '#5C6370', 
      function: '#61AFEF',     
      variable: '#E06C75',
      operator: '#56B6C2', 
      tag: '#E06C75',    
      attribute: '#D19A66',   
      punctuation: '#ABB2BF',
    },

    accent: {
      primary: '#00D9FF',
      secondary: '#00FF88',
      error: '#FF0040',
      warning: '#FFDD00',
      info: '#00D9FF',
      success: '#00FF88',
    },

    brutal: {
      black: '#FFFFFF',
      white: '#000000',
      yellow: '#FFDD00',
      blue: '#00D9FF',
      red: '#FF0040',
      green: '#00FF88',
    },

    border: {
      default: '#3E3E42',
      dark: '#464647',
      light: '#2D2D30',
      brutal: '#FFFFFF',
    },
  },
};

export type Theme = typeof lightTheme;