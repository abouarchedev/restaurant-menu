import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import InfoPopup from '../components/InfoPopup';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import BottomNav from '../components/BottomNav';
import { categories } from '../content/clients/default/categories';
import { menuItems } from '../content/clients/default/menu';
import { restaurant } from '../content/clients/default/restaurant';

const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

const pageVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function HomePage() {
  const [showPopup, setShowPopup]           = useState(false);
  const [search, setSearch]                 = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const seen = sessionStorage.getItem('popup_seen');
    if (!seen) setShowPopup(true);
  }, []);

  const dismissPopup = () => {
    sessionStorage.setItem('popup_seen', '1');
    setShowPopup(false);
  };

  const handleSuivant = () => {
    if (activeCategory === 'all') setActiveCategory(sortedCategories[0].id);
    else {
      const idx = sortedCategories.findIndex((c) => c.id === activeCategory);
      const next = sortedCategories[idx + 1];
      setActiveCategory(next ? next.id : 'all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = menuItems.filter((item) => {
    const matchCat    = activeCategory === 'all' || item.categoryId === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const isAll    = activeCategory === 'all';
  const popular  = isAll ? filtered.filter((i) => i.popular) : [];
  const allPlats = isAll ? filtered.filter((i) => !i.popular) : filtered;

  return (
    <>
      <Head>
      <title>{`${restaurant.name} - Menu`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {showPopup && <InfoPopup onDismiss={dismissPopup} />}

      <motion.main
        className="max-w-md mx-auto pb-24 pt-8"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        style={{ filter: showPopup ? 'blur(4px)' : 'none', transition: 'filter 0.2s' }}
      >
        <div className="px-4 mb-6 text-center">
          <h1 className="font-display leading-none mb-1" style={{ fontSize: '3rem', color: 'var(--color-text)' }}>
            {restaurant.greeting}
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{restaurant.tagline}</p>
        </div>

        <SearchBar value={search} onChange={setSearch} placeholder="Un petit creux ?" />
        <CategoryTabs categories={categories} active={activeCategory} onSelect={handleSelectCategory} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
          >
            {isAll && popular.length > 0 && (
              <section className="mb-6">
                <SectionHeader title="Populaires" action="Suivant" onAction={handleSuivant} />
                <div className="grid grid-cols-2 gap-3 px-4">
                  {popular.map((item, i) => (
                    <motion.div key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}>
                      <ProductCard item={item} currency={restaurant.currency} />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {allPlats.length > 0 && (
              <section>
                <SectionHeader
                  title="Tous les plats"
                  action={!isAll ? 'Suivant' : undefined}
                  onAction={!isAll ? handleSuivant : undefined}
                />
                <div className="grid grid-cols-2 gap-3 px-4">
                  {allPlats.map((item, i) => (
                    <motion.div key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}>
                      <ProductCard item={item} currency={restaurant.currency} />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {filtered.length === 0 && (
              <motion.p className="text-center py-12 text-sm" style={{ color: 'var(--color-muted)' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Aucun plat trouvé.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.main>

      <BottomNav />
    </>
  );
}
