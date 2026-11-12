import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../content/clients/default/menu';
import { useCart } from '../context/CartContext';
import AddToCartModal from './AddToCartModal';

interface Props { item: MenuItem; currency: string; }

export default function ProductCard({ item, currency }: Props) {
  const { addItem, removeItem, items } = useCart();
  const inCart = items.some((i) => i.id === item.id);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inCart) removeItem(item.id);
    else setShowModal(true);
  };

  const handleConfirm = (quantity: number, sauce?: string) => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image, quantity, sauce });
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-sm"
        style={{ aspectRatio: '1/1' }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, var(--color-gradient-from) 30%, var(--color-gradient-to) 100%)`,
        }} />

        <motion.button
          onClick={handleButtonClick}
          whileTap={{ scale: 0.85 }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow"
          style={{
            backgroundColor: inCart ? 'var(--color-primary)' : '#ffffff',
            border: inCart ? 'none' : '1.5px solid var(--color-primary)',
          }}
          animate={{ rotate: inCart ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {inCart ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth={2.5} strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </motion.button>

        {inCart && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: '2.5px solid var(--color-primary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="inline-block text-xs font-bold rounded-full px-2 py-0.5 mb-1"
            style={{ backgroundColor: 'var(--color-badge-bg)', color: 'var(--color-badge-fg)' }}>
            {item.price}{currency}
          </span>
          <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
        </div>
      </motion.div>

      {showModal && (
        <AddToCartModal item={item} currency={currency} onConfirm={handleConfirm} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
