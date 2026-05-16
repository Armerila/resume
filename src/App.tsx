import { useTranslation } from 'react-i18next';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { education, experience, projects } from './data/resume';
import { fromBase64 } from './utils/obfuscate';
import TerminalCard from './components/TerminalCard';
import Terminal from './components/Terminal';

const email    = fromBase64('YXJra3V2aW9AZ21haWwuY29t');
const phone    = fromBase64('MDQ0MzAyMDU5Ng==');
const linkedIn = 'https://www.linkedin.com/in/armerila/';
const github   = 'https://github.com/Armerila';

function AppContent() {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const { i18n } = useTranslation();
  const isFi   = i18n.language === 'fi';
  const isDark = theme.mode === 'dark';

  const entryStyle: React.CSSProperties = { marginBottom: theme.spacing[8] };
  const titleStyle: React.CSSProperties = { margin: 0, fontSize: theme.fontSizes.base, fontWeight: 700 };
  const metaStyle:  React.CSSProperties = { margin: `${theme.spacing[1]} 0 ${theme.spacing[2]}`, color: theme.colors.text.secondary, fontSize: theme.fontSizes.sm };
  const stackStyle: React.CSSProperties = { margin: `${theme.spacing[2]} 0 0`, color: theme.colors.syntax.string, fontFamily: theme.fonts.mono, fontSize: theme.fontSizes.sm };

  return (
    <div style={{ background: theme.colors.background.gradient, backgroundAttachment: 'fixed', minHeight: '100vh' }}>
      <div style={{ fontFamily: theme.fonts.mono, color: theme.colors.text.primary, maxWidth: '900px', margin: '0 auto', padding: theme.spacing[8] }}>
        <div style={{ display: 'flex', gap: theme.spacing[3], marginBottom: theme.spacing[8] }}>
          <button onClick={toggle} title={isDark ? 'Switch to light' : 'Switch to dark'}>
            {isDark ? '○' : '●'}
          </button>
          <button onClick={() => i18n.changeLanguage(isFi ? 'en' : 'fi')}>
            {isFi ? 'EN' : 'FI'}
          </button>
        </div>

        <TerminalCard title="~/resume/profile">
          <pre className="ascii-art">{`    ___         __  __           __  ___          _ ___   _ _
   /   |  _____/ /_/ /___  __   /  |/  /__  _____(_) (_)_(_|_)___  ___  ____
  / /| | / ___/ __/ __/ / / /  / /|_/ / _ \\/ ___/ / / __ \`/ / __ \\/ _ \\/ __ \\
 / ___ |/ /  / /_/ /_/ /_/ /  / /  / /  __/ /  / / / /_/ / / / / /  __/ / / /
/_/  |_/_/   \\__/\\__/\\__,_/  /_/  /_/\\___/_/  /_/_/\\__,_/_/_/ /_/\\___/_/ /_/ `}</pre>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.text.secondary, marginTop: theme.spacing[2], marginBottom: theme.spacing[6] }}>
            {t('title')}
          </h2>
          <Terminal />
        </TerminalCard>

        <TerminalCard title="~/resume/experience">
          {experience.map(({ id, company, location, period, stack }) => (
            <div key={id} style={entryStyle}>
              <p style={titleStyle}>{t(`experience.${id}.title`)}</p>
              <p style={metaStyle}>{company} · {location} · {period}</p>
              <p style={{ margin: 0 }}>{t(`experience.${id}.desc`)}</p>
              {stack && <p style={stackStyle}>{stack}</p>}
            </div>
          ))}
        </TerminalCard>

        <TerminalCard title="~/resume/education">
          {education.map(({ id, period, minor }) => (
            <div key={id} style={entryStyle}>
              <p style={titleStyle}>{t(`education.${id}.degree`)}</p>
              <p style={metaStyle}>{t(`education.${id}.school`)} · {period}</p>
              {minor && <p style={{ ...metaStyle, margin: 0 }}>{t(`education.${id}.minor`)}</p>}
            </div>
          ))}
        </TerminalCard>

        <TerminalCard title="~/resume/projects">
          {projects.map(({ id, period, stack }) => (
            <div key={id} style={entryStyle}>
              <p style={titleStyle}>{t(`projects.${id}.title`)}</p>
              <p style={metaStyle}>{t(`projects.${id}.org`)} · {period}</p>
              <p style={{ margin: 0 }}>{t(`projects.${id}.desc`)}</p>
              {t(`projects.${id}.resp`, '') && <p style={{ margin: `${theme.spacing[2]} 0 0` }}>{t(`projects.${id}.resp`)}</p>}
              {stack && <p style={stackStyle}>{stack}</p>}
            </div>
          ))}
        </TerminalCard>

        <TerminalCard title="~/resume/languages">
          <p style={{ lineHeight: theme.lineHeights.relaxed, margin: 0 }}>
            {t('languages.finnish')}<br />
            {t('languages.english')}<br />
            {t('languages.swedish')}
          </p>
        </TerminalCard>

        <TerminalCard title="~/resume/contact">
          <p style={{ lineHeight: theme.lineHeights.relaxed, margin: 0 }}>
            Tampere, Finland<br />
            <a href={`tel:${phone}`} style={{ color: theme.colors.accent.primary }}>{phone}</a><br />
            <a href={`mailto:${email}`} style={{ color: theme.colors.accent.primary }}>{email}</a><br />
            <a href={linkedIn} style={{ color: theme.colors.accent.primary }}>LinkedIn</a><br />
            <a href={github} style={{ color: theme.colors.accent.primary }}>GitHub</a>
          </p>
        </TerminalCard>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
