// ─────────────────────────────────────────────
//  CATEGORIES — edit to add/remove/rename categories
//  These drive the category tabs on the home page
// ─────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  order: number;
}

export const categories: Category[] = [
  { id: 'tacos',     name: 'Tacos',     slug: 'tacos',     order: 1 },
  { id: 'sandwiches', name: 'Les sandwiches', slug: 'sandwiches', order: 2 },
  { id: 'Pizza', name: 'Pizza', slug: 'Pizza', order: 3 },
  { id: 'plats',     name: 'Les plats', slug: 'plats',     order: 4 },
  { id: 'boissons',  name: 'Les Boissons',  slug: 'boissons',  order: 5 },
];
