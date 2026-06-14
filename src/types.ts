export interface MenuItem {
  name: string;
  price: string;
  description: string;
  isChefRecommendation?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string; // Dynamic icon key
  items: MenuItem[];
}

export type ActiveTab = 'home' | 'menu' | 'specials' | 'events' | 'contact';
