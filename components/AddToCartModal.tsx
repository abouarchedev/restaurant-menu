import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '../content/clients/default/menu';

interface Props {
  item: MenuItem;
  currency: string;
  onConfirm: (quantity: number, sauce?: string) => void;
  onClose: () => void;
}

export default function AddToCartModal({ item, currency, onConfirm, onClose }: Props) {
  const hasSauces = item.sauces && item.sauces.length > 0;
  const [step, setStep]         = useState<'qty' | 'sauce'>('qty');
  const [quantity, setQuantity] = useState(1);
  const [sauce, setSauce]       = useState<string | undefined>(undefined);

  const handleNext = () => {
    if (hasSauces && step === 'qty') setStep('sauce');
    else onConfirm(quantity, sauce);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-end justify-center"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="sheet"
          className="w-full max-w-md rounded-t-3xl overflow-hidden pb-10"
          style={{ backgroundColor: 'var(--color-background)' }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full" style={{ backgroundColor: 'var(--color-border)' }} />
          </div>

          <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{item.name}</p>
              <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{item.price}{currency}</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 'qty' ? (
              <motion.div key="qty" className="px-5 pt-5"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}>
                <p className="font-semibold text-base mb-5" style={{ color: 'var(--color-text)' }}>Combien d&apos;articles ?</p>
                <div className="flex items-center justify-center gap-6 mb-4">
                  <motion.button whileTap={{ scale: 0.85 }} onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-2xl font-light"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>−</motion.button>
                  <span className="font-display text-4xl w-8 text-center" style={{ color: 'var(--color-text)' }}>{quantity}</span>
                  <motion.button whileTap={{ scale: 0.85 }} onClick={() => setQuantity((q) => q + 1)}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-fg)' }}>+</motion.button>
                </div>
                <p className="text-center text-xs mb-6" style={{ color: 'var(--color-muted)' }}>
                  Sous-total : <strong>{item.price * quantity}{currency}</strong>
                </p>
                <motion.button whileTap={{ scale: 0.97 }} onClick={handleNext}
                  className="w-full rounded-full py-4 font-semibold text-base"
                  style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}>
                  {hasSauces ? 'Suivant — Choisir la sauce' : 'Ajouter à ma commande'}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="sauce" className="px-5 pt-5"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}>
                <p className="font-semibold text-base mb-5" style={{ color: 'var(--color-text)' }}>Choisissez votre sauce</p>
                <div className="flex flex-col gap-3 mb-6">
                  {item.sauces!.map((s) => (
                    <motion.button key={s} whileTap={{ scale: 0.97 }} onClick={() => setSauce(s)}
                      className="w-full rounded-2xl py-4 px-5 text-left font-medium border-2 transition-colors"
                      style={{
                        borderColor: sauce === s ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: sauce === s ? 'rgba(232,25,44,0.06)' : 'var(--color-surface)',
                        color: sauce === s ? 'var(--color-primary)' : 'var(--color-text)',
                      }}>
                      <span className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                          style={{ borderColor: sauce === s ? 'var(--color-primary)' : 'var(--color-border)' }}>
                          {sauce === s && <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />}
                        </span>
                        {s}
                      </span>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep('qty')} className="flex-1 rounded-full py-4 font-semibold text-sm border"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>Retour</button>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => onConfirm(quantity, sauce)} disabled={!sauce}
                    className="flex-[2] rounded-full py-4 font-semibold text-base disabled:opacity-40"
                    style={{ backgroundColor: 'var(--color-btn-primary)', color: 'var(--color-btn-primary-fg)' }}>
                    Ajouter à ma commande
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
