import { Theme } from '../content/clients/default/theme';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary',        theme.primary);
  root.style.setProperty('--color-primary-fg',     theme.primaryFg);
  root.style.setProperty('--color-background',     theme.background);
  root.style.setProperty('--color-surface',        theme.surface);
  root.style.setProperty('--color-card',           theme.card);
  root.style.setProperty('--color-text',           theme.text);
  root.style.setProperty('--color-muted',          theme.muted);
  root.style.setProperty('--color-border',         theme.border);
  root.style.setProperty('--color-nav-active',     theme.navActive);
  root.style.setProperty('--color-nav-inactive',   theme.navInactive);
  root.style.setProperty('--color-popup-bg',       theme.popupBg);
  root.style.setProperty('--color-overlay',        theme.overlay);
  root.style.setProperty('--color-btn-primary',    theme.btnPrimary);
  root.style.setProperty('--color-btn-primary-fg', theme.btnPrimaryFg);
  root.style.setProperty('--color-badge-bg',       theme.badgeBg);
  root.style.setProperty('--color-badge-fg',       theme.badgeFg);
  root.style.setProperty('--color-gradient-from',  theme.gradientFrom);
  root.style.setProperty('--color-gradient-to',    theme.gradientTo);
  root.style.setProperty('--color-check',          theme.check);
}
