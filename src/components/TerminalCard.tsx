import type { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

const USER = 'arttu@resume';

interface Props {
  title: string;
  children: ReactNode;
}

export default function TerminalCard({ title, children }: Props) {
  const { theme } = useTheme();

  return (
    <div style={{
      border: `1px solid ${theme.colors.border.default}`,
      boxShadow: theme.shadows.card,
      borderRadius: theme.radii.lg,
      background: theme.colors.background.secondary,
      overflow: 'hidden',
      marginBottom: theme.spacing[6],
    }}>
      <div style={{
        padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
        background: theme.colors.background.tertiary,
        borderBottom: `1px solid ${theme.colors.border.default}`,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing[1],
        fontFamily: theme.fonts.mono,
        fontSize: theme.fontSizes.sm,
      }}>
        <span style={{ color: theme.colors.accent.secondary }}>{USER}</span>
        <span style={{ color: theme.colors.text.tertiary }}>:</span>
        <span style={{ color: theme.colors.accent.primary }}>{title}</span>
        <span style={{ color: theme.colors.text.tertiary }}>$</span>
        <span style={{ color: theme.colors.text.tertiary }}>▋</span>
      </div>
      <div style={{ padding: theme.spacing[4] }}>
        {children}
      </div>
    </div>
  );
}
