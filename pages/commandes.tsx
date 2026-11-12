import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import OrderCard from '../components/OrderCard';
import BottomNav from '../components/BottomNav';
import { restaurant } from '../content/clients/default/restaurant';

const pageVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function CommandesPage() {
  const { items, total, clearCart, removeItem } = useCart();

  return (
    <>
      <Head>
        <title>Commandes - Restaurant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <motion.main
        className="max-w-md mx-auto pb-24 pt-8"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="px-4 mb-2 text-center">
          <h1 className="font-display leading-none mb-1" style={{ fontSize: '3rem', color: 'var(--color-text)' }}>
            Historique
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Vos commandes..</p>
        </div>

        <div className="flex justify-between items-center px-4 mb-3 mt-4">
          <span className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Ajouté</span>
          <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>Retour</Link>
        </div>

        <AnimatePresence>
          {items.length > 0 ? (
            <>
              {/* Order cards grid with AnimatePresence for removal */}
              <div className="grid grid-cols-2 gap-3 px-4 mb-8">
                <AnimatePresence>
                  {items.map((item) => (
                    <OrderCard key={item.id} item={item} currency={restaurant.currency} onRemove={removeItem} />
                  ))}
                </AnimatePresence>
              </div>

              {/* Confirmation */}
              <motion.div
                className="flex flex-col items-center px-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4"
                  style={{ borderColor: 'var(--color-text)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.35, type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>

                <h2 className="font-display mb-2" style={{ fontSize: '2.5rem', color: 'var(--color-text)', lineHeight: 1.1 }}>
                  C&apos;est prêt&nbsp;!
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                  Montrez vos commandes au serveur et il les préparera pour vous.
                </p>

                {/* Total — not clickable */}
                <div className="rounded-full px-10 py-4 font-bold text-lg w-full max-w-xs text-center select-none mb-4"
                  style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}>
                  Total = {total}{restaurant.currency}
                </div>

                {/* Votre recette button */}
                <Link href="/recette"
                  className="w-full max-w-xs rounded-full py-4 font-semibold text-base text-center block border-2 mb-4"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', backgroundColor: 'transparent' }}>
                  Votre recette
                </Link>

                <button onClick={clearCart} className="text-xs underline" style={{ color: 'var(--color-muted)' }}>
                  Réinitialiser la commande
                </button>
              </motion.div>
            </>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center px-4 mt-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6"
                style={{ borderColor: 'var(--color-border)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>Aucune commande</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
                Ajoutez des plats depuis le menu pour commencer.
              </p>
              <Link href="/" className="rounded-full px-8 py-3 font-semibold text-sm"
                style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}>
                Voir le menu
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      <BottomNav />
    </>
  );
}
