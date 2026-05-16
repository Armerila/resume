import { useState, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/resume';
import { fromBase64 } from '../utils/obfuscate';

const email    = fromBase64('YXJra3V2aW9AZ21haWwuY29t');
const phone    = fromBase64('MDQ0MzAyMDU5Ng==');
const linkedIn = 'https://www.linkedin.com/in/armerila/';
const github   = 'https://github.com/Armerila';

const PROMPT_USER = 'arttu@resume';
const PROMPT_PATH = '~/resume/profile';

export default function Terminal() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami', 'skills']);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function getOutput(cmd: string): ReactNode | null {
    switch (cmd.trim().toLowerCase()) {
      case 'whoami':
        return (
          <>
            <p style={{ margin: `0 0 ${theme.spacing[2]}` }}>{t('profile.intro')}</p>
            <p style={{ margin: 0 }}>{t('profile.detail')}</p>
          </>
        );
      case 'skills':
        return (
          <div>
            {(['tech', 'databases', 'tools'] as const).map(key => (
              <div key={key} style={{ marginBottom: theme.spacing[3] }}>
                <span style={{ color: theme.colors.accent.primary }}>{key}/</span>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
                  marginTop: theme.spacing[1],
                  color: theme.colors.text.secondary,
                }}>
                  {skills[key].split(', ').map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'contact':
        return (
          <p style={{ lineHeight: theme.lineHeights.relaxed, margin: 0 }}>
            Tampere<br />
            <a href={`tel:${phone}`} style={{ color: theme.colors.accent.primary }}>{phone}</a><br />
            <a href={`mailto:${email}`} style={{ color: theme.colors.accent.primary }}>{email}</a><br />
            <a href={linkedIn} style={{ color: theme.colors.accent.primary }}>LinkedIn</a><br />
            <a href={github} style={{ color: theme.colors.accent.primary }}>GitHub</a>
          </p>
        );
      case 'help':
        return (
          <p style={{ margin: 0, color: theme.colors.text.secondary, lineHeight: theme.lineHeights.relaxed }}>
            whoami &nbsp;— about me<br />
            skills &nbsp;&nbsp;— technical skills<br />
            contact — contact info<br />
            clear &nbsp;&nbsp;— clear screen<br />
            help &nbsp;&nbsp;&nbsp;— this message
          </p>
        );
      case '':
        return null;
      default:
        return (
          <span style={{ color: theme.colors.text.secondary }}>
            command not found: {cmd.trim()}. Try &apos;help&apos;.
          </span>
        );
    }
  }

  function submit() {
    const cmd = input;
    setInput('');
    if (cmd.trim().toLowerCase() === 'clear') {
      setCmdHistory([]);
      return;
    }
    setCmdHistory(h => [...h, cmd]);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit();
  }

  const promptUser   = <span style={{ color: theme.colors.accent.secondary }}>{PROMPT_USER}</span>;
  const promptColon  = <span style={{ color: theme.colors.text.tertiary }}>:</span>;
  const promptPath   = <span style={{ color: theme.colors.accent.primary }}>{PROMPT_PATH}</span>;
  const promptDollar = <span style={{ color: theme.colors.text.tertiary }}>$ </span>;

  return (
    <div
      onClick={() => inputRef.current?.focus({ preventScroll: true })}
      style={{
        fontFamily: theme.fonts.mono,
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeights.normal,
        cursor: 'text',
        overflow: 'hidden',
      }}
    >
      {cmdHistory.map((cmd, i) => {
        const output = getOutput(cmd);
        return (
          <div key={i} style={{ marginBottom: theme.spacing[3] }}>
            <div>{promptUser}{promptColon}{promptPath}{promptDollar}<span>{cmd}</span></div>
            {output && <div style={{ marginTop: theme.spacing[1] }}>{output}</div>}
          </div>
        );
      })}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {promptUser}{promptColon}{promptPath}{promptDollar}
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: theme.colors.text.primary,
            fontFamily: theme.fonts.mono,
            fontSize: theme.fontSizes.sm,
            flex: 1,
            minWidth: 0,
            caretColor: theme.colors.accent.primary,
            padding: 0,
            paddingLeft: theme.spacing[1],
          }}
        />
      </div>
    </div>
  );
}
