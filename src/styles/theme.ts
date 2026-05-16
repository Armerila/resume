const baseTheme = {
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
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

  shadows: {
    ...baseTheme.shadows,
    card: '2px 2px 0px',
  },

  colors: {
    background: {
      primary: '#CAC4E0',
      secondary: '#F2EFFC',
      tertiary: '#DDD8F0',
      code: '#EAE6F8',
      overlay: 'rgba(242, 239, 252, 0.9)',
      gradient: 'linear-gradient(158deg, #C8C2DE 33%, #CEC8E6 33%, #CEC8E6 66%, #C4BEDC 66%)',
    },

    text: {
      primary: '#2A2D42',
      secondary: '#5C6080',
      tertiary: '#8B90AD',
      inverse: '#F5F3FC',
      code: '#3D3080',
    },

    syntax: {
      keyword: '#9040B8',
      string: '#1A7A40',
      number: '#2055B0',
      comment: '#8B90AD',
      function: '#5535B8',
      variable: '#B84010',
      operator: '#9040B8',
      tag: '#1A7A40',
      attribute: '#2055B0',
      punctuation: '#2A2D42',
    },

    accent: {
      primary: '#5060D8',
      secondary: '#28A048',
      error: '#C02838',
      warning: '#C48010',
      info: '#5060D8',
      success: '#28A048',
    },

    brutal: {
      black: '#2A2D42',
      white: '#F5F3FC',
      yellow: '#C48010',
      blue: '#5060D8',
      red: '#C02838',
      green: '#28A048',
    },

    border: {
      default: '#B8B2D2',
      dark: '#A8A2C4',
      light: '#CCC8E4',
      brutal: '#2A2D42',
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  mode: 'dark' as const,

  shadows: {
    ...baseTheme.shadows,
    card: '0px 0px 8px rgba(67, 183, 255, 0.50), 0px 0px 24px rgba(67, 183, 255, 0.35), 0px 0px 48px rgba(67, 183, 255, 0.15)',
  },

  colors: {
    background: {
      primary: '#1E1E1E',
      secondary: '#252526',
      tertiary: '#2D2D30',
      code: '#1A1A1A',
      overlay: 'rgba(30, 30, 30, 0.9)',
      gradient: 'linear-gradient(158deg, #0B0F1A 33%, #111820 33%, #111820 66%, #150D1F 66%)',
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

export type Theme = typeof lightTheme | typeof darkTheme;