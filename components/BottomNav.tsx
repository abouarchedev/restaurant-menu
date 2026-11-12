import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const tabs = [
  {
    href: '/',
    label: 'Accueil',
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'var(--color-nav-active)' : 'var(--color-nav-inactive)'}
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    href: '/commandes',
    label: 'mes commandes',
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24"
        fill={active ? 'var(--color-nav-active)' : 'none'}
        stroke={active ? 'var(--color-nav-active)' : 'var(--color-nav-inactive)'}
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    href: '/social',
    label: 'Nous',
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'var(--color-nav-active)' : 'var(--color-nav-inactive)'}
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const router = useRouter();
  const { count } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 px-4 border-t z-40"
      style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      {tabs.map((tab) => {
        const isActive = router.pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-1 relative">
            <motion.div whileTap={{ scale: 0.85 }} className="relative">
              {tab.href === '/commandes' && count > 0 && (
                <motion.span
                  className="absolute -top-1 -right-2 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center z-10"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-fg)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {count}
                </motion.span>
              )}
              {tab.icon(isActive)}
            </motion.div>
            <span className="text-[10px] font-semibold"
              style={{ color: isActive ? 'var(--color-nav-active)' : 'var(--color-nav-inactive)' }}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
