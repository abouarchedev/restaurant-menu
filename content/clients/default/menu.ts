// ─────────────────────────────────────────────
//  MENU ITEMS — edit to add/remove/update dishes
//  categoryId must match an id from categories.ts
//  sauces: optional list shown in sauce picker popup (for tacos, etc.)
// ─────────────────────────────────────────────

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  categoryId: string;
  image: string;
  popular: boolean;
  sauces?: string[]; // if set, triggers sauce selection popup
}

export const menuItems: MenuItem[] = [

  {
    id: 4,
    name: 'Pizza fromage',
    price: 45,
    categoryId: 'Pizza',
    image: '/images/pizza-fromage.jpg',
    popular: false,
  },
 

  {
    id: 5,
    name: 'Plat Chicken',
    price: 45,
    categoryId: 'plats',
    image: '/images/plat-chicken.png' ,
    popular: false,
  },
  {
    id: 6,
    name: 'Glass cola canette 25cl',
    price: 6,
    categoryId: 'boissons',
    image: '/images/Glass-Cola-Canette-25cl.png',
    popular: true,
  },
  {
    id: 7,
    name: 'Sandwich chicken crispy',
    price: 25,
    categoryId: 'sandwiches',
    image: '/images/Sandwich-chicken-crispy.png',
    popular: false,
  },
 
  {
    id: 9,
    name: "Tacos Shawarma",
    price: 32,
    categoryId: 'tacos',
    image: '/images/tacos-shawarma.webp',
    popular: true,
    sauces: ['Sauce Algerienne', 'Sauce Biggy'],
  },
];
