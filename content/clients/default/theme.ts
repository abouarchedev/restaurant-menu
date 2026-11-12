// ─────────────────────────────────────────────
//  THEME — edit this file to restyle the whole app for a new client
//  One file controls every color token used across all components
// ─────────────────────────────────────────────

export const theme = {
  // Brand
  primary:    '#E8192C',       // Main brand color (red)
  primaryFg:  '#ffffff',       // Text on primary color

  // Layout
  background: '#ffffff',       // Page background
  surface:    '#f5f5f5',       // Inputs, secondary surfaces
  card:       '#ffffff',       // Card backgrounds
  border:     '#e5e7eb',       // Borders / dividers

  // Typography
  text:       '#111111',       // Main text color
  muted:      '#9ca3af',       // Subtitles, hints, secondary text

  // Navigation
  navActive:  '#E8192C',       // Active nav tab icon + label
  navInactive:'#111111',       // Inactive nav tab

  // Popup
  popupBg:    '#111111',       // Info popup card background

  // Overlay (behind popup)
  overlay:    'rgba(0,0,0,0.55)',

  // Buttons
  btnPrimary:   '#E8192C',     // Primary button background
  btnPrimaryFg: '#ffffff',     // Primary button text

  // Badges (price badge on cards)
  badgeBg: 'rgba(0,0,0,0.55)', // Price badge background
  badgeFg: '#ffffff',           // Price badge text

  // Card gradient overlay (from transparent → primary)
  gradientFrom: 'rgba(0,0,0,0)',
  gradientTo:   '#E8192C',

  // Check icon color (on order cards)
  check: '#E8192C',
};

export type Theme = typeof theme;
