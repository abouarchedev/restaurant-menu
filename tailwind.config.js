/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Young Serif"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary:           'var(--color-primary)',
        'primary-fg':      'var(--color-primary-fg)',
        background:        'var(--color-background)',
        surface:           'var(--color-surface)',
        'card-bg':         'var(--color-card)',
        'app-text':        'var(--color-text)',
        muted:             'var(--color-muted)',
        border:            'var(--color-border)',
        'nav-active':      'var(--color-nav-active)',
        'nav-inactive':    'var(--color-nav-inactive)',
        'popup-bg':        'var(--color-popup-bg)',
        'btn-primary':     'var(--color-btn-primary)',
        'btn-primary-fg':  'var(--color-btn-primary-fg)',
        'badge-bg':        'var(--color-badge-bg)',
        'badge-fg':        'var(--color-badge-fg)',
        'check-color':     'var(--color-check)',
      },
    },
  },
  plugins: [],
};
