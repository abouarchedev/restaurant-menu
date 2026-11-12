import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import { theme } from '../content/clients/default/theme';
import { applyTheme } from '../lib/applyTheme';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}
