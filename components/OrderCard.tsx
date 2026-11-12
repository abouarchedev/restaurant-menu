import { motion } from 'framer-motion';
import { CartItem } from '../context/CartContext';

interface Props {
  item: CartItem;
  currency: string;
  onRemove: (id: number) => void;
}

export default function OrderCard({ item, currency, onRemove }: Props) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-sm"
      style={{ aspectRatio: '1/1' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.3, type: 'spring' }}
    >
      <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />

      <div className="absolute inset-0" style={{
        background: `linear-gradient(to bottom, var(--color-gradient-from) 30%, var(--color-gradient-to) 100%)`,
      }} />

      {/* Remove button — top right */}
      <motion.button
        onClick={() => onRemove(item.id)}
        whileTap={{ scale: 0.82 }}
        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow"
        style={{ border: '1.5px solid var(--color-primary)' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth={2.5} strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </motion.button>

      {/* Qty badge */}
      {item.quantity > 1 && (
        <div className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
          {item.quantity}
        </div>
      )}

      {/* Price + Name + Sauce */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <span className="inline-block text-xs font-bold rounded-full px-2 py-0.5 mb-1"
          style={{ backgroundColor: 'var(--color-badge-bg)', color: 'var(--color-badge-fg)' }}>
          {item.price * item.quantity}{currency}
        </span>
        <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
        {item.sauce && <p className="text-white text-xs opacity-80 mt-0.5">{item.sauce}</p>}
      </div>
    </motion.div>
  );
}
