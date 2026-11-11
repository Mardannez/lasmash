export type MenuCategory =
  | 'smash-burgers' |'combos' |'acompañantes' |'extras' |'bebidas';

interface BaseMenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  bestSeller?: boolean;
  badge?: string;
}

export type PattyCount = 1 | 2 | 3;

export interface BurgerMenuItem extends BaseMenuItem {
  category: 'smash-burgers';
  price: number | null;
  patties: PattyCount;
  specialty: string;
}

interface OtherMenuItem extends BaseMenuItem {
  category: Exclude<MenuCategory, 'smash-burgers'>;
  price: number;
}

export type MenuItem = BurgerMenuItem | OtherMenuItem;

export interface MenuCategory_Meta {
  id: MenuCategory;
  label: string;
}
