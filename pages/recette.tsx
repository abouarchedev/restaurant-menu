import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { restaurant } from '../content/clients/default/restaurant';

const pageVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function RecettePage() {
  const { items, total } = useCart();

  const now = new Date();
  const dateStr = now.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <Head>
       <title>{`${restaurant.name} - Recettes`}</title>      
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <motion.main
        className="max-w-md mx-auto pb-24 pt-8 px-4"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back */}
        <div className="flex items-center mb-6">
          <Link href="/commandes" className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--color-primary)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Retour
          </Link>
        </div>

        {/* Receipt card */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg border"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.08 }}
        >
          {/* Header stripe */}
          <div className="py-6 px-6 text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1 opacity-80">
              {restaurant.name}
            </p>
            <h1 className="font-display text-white leading-none" style={{ fontSize: '2.2rem' }}>
              Votre commande
            </h1>
            <p className="text-white text-xs mt-2 opacity-70">{dateStr} — {timeStr}</p>
          </div>

          {/* Dashed divider */}
          <div className="px-6 py-1">
            <div className="border-t-2 border-dashed" style={{ borderColor: 'var(--color-border)' }} />
          </div>

          {/* Items */}
          <div className="px-6 py-4">
            {items.length === 0 ? (
              <p className="text-center py-6 text-sm" style={{ color: 'var(--color-muted)' }}>
                Aucun plat ajouté.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.3, type: 'spring', stiffness: 280, damping: 24 }}
                  >
                    {/* Image */}
                    <img src={item.image} alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 shadow-sm" />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-tight" style={{ color: 'var(--color-text)' }}>
                        {item.name}
                      </p>
                      {item.sauce && (
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>
                          {item.sauce}
                        </p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>
                        {item.quantity} × {item.price}{restaurant.currency}
                      </p>
                    </div>

                    {/* Subtotal */}
                    <p className="font-bold text-sm flex-shrink-0" style={{ color: 'var(--color-text)' }}>
                      {item.price * item.quantity}{restaurant.currency}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Dashed divider */}
          <div className="px-6 py-1">
            <div className="border-t-2 border-dashed" style={{ borderColor: 'var(--color-border)' }} />
          </div>

          {/* Total row */}
          <motion.div
            className="flex items-center justify-between px-6 py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + items.length * 0.07 }}
          >
            <span className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Total</span>
            <span className="font-display text-2xl" style={{ color: 'var(--color-primary)' }}>
              {total}{restaurant.currency}
            </span>
          </motion.div>

          {/* Footer note */}
          <div className="px-6 pb-6 text-center">
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Montrez cette page à votre serveur. Merci de votre visite !
            </p>
          </div>
        </motion.div>

        {/* Back to menu */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/"
            className="inline-block rounded-full px-8 py-3 font-semibold text-sm"
            style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}>
            Retour au menu
          </Link>
        </motion.div>
      </motion.main>
    </>
  );
}
