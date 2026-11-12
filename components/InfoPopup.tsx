import { motion } from 'framer-motion';

interface Props { onDismiss: () => void; }

export default function InfoPopup({ onDismiss }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: 'var(--color-overlay)', backdropFilter: 'blur(6px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-3xl p-8 text-white text-center w-full max-w-sm shadow-2xl"
        style={{ backgroundColor: 'var(--color-popup-bg)' }}
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.05 }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--color-primary)' }}>
            <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>!</span>
          </div>
        </div>
        <h2 className="font-display text-3xl mb-4">Bienvenue!</h2>
        <p className="text-sm leading-relaxed mb-7" style={{ color: '#d1d5db' }}>
          Ce menu digital est uniquement destiné à vous aider à choisir vos plats.
          Il ne permet pas de commander en ligne ni de livraison.
          Veuillez être présent au restaurant et montrer votre commande au serveur.
        </p>
        <motion.button
          onClick={onDismiss}
          whileTap={{ scale: 0.96 }}
          className="w-full font-semibold rounded-full py-4 text-base"
          style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}
        >
          J&apos;ai compris
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
