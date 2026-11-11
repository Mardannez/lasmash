import type { BurgerMenuItem, MenuItem, MenuCategory_Meta, PattyCount } from '@/types/menu';

export const menuCategories: MenuCategory_Meta[] = [
{ id: 'combos', label: 'Combos' },
{ id: 'acompañantes', label: 'Acompañantes' },
{ id: 'extras', label: 'Extras' },
{ id: 'bebidas', label: 'Bebidas' }];


export const burgerGroups: { patties: PattyCount; label: string; title: string }[] = [
  { patties: 1, label: '1 carne', title: 'Las clásicas' },
  { patties: 2, label: '2 carnes', title: 'Las favoritas' },
  { patties: 3, label: '3 carnes', title: 'Las monstruosas' },
];

const burgers = {
  original: {
    id: 'la-smash',
    name: 'La Original Smash',
    description: 'La que empezó todo. Una carne smash con bordes crujientes, queso americano fundido, pepinillos, cebolla fresca y nuestra salsa especial en pan brioche tostado.',
    specialty: 'El auténtico sabor smash, sencillo y delicioso.',
    price: 135,
    patties: 1,
    image: '/assets/images/smash/original.webp',
    alt: 'Smash de una carne con queso americano, pepinillos y cebolla picada',
    category: 'smash-burgers',
  },
  fuego: {
    id: 'fuego-smash',
    name: 'La Fuego Smash',
    description: 'Una carne smash dorada en plancha, queso cheddar, jalapeños, cebolla morada y una cremosa salsa chipotle que aporta el picante perfecto.',
    specialty: 'Un toque picante que realza el sabor de la carne.',
    price: 160,
    patties: 1,
    image: '/assets/images/smash/fuego.webp',
    alt: 'Smash de una carne con cheddar, jalapeños y cebolla morada',
    category: 'smash-burgers',
  },
  doble: {
    id: 'smash-doble',
    name: 'La Doble Smash',
    description: 'Dos carnes smash con una costra irresistible, doble queso americano derretido, pepinillos, cebolla picada y nuestra salsa de la casa.',
    specialty: 'Doble carne, doble queso y puro sabor a la plancha.',
    price: 155,
    patties: 2,
    image: '/assets/images/smash/doble.webp',
    alt: 'Smash de dos carnes con queso americano, pepinillos y cebolla picada',
    category: 'smash-burgers',
  },
  bacon: {
    id: 'bacon-super',
    name: 'La Bacon Super',
    description: 'Dos carnes smash jugosas, queso cheddar fundido, generosas tiras de tocino crujiente, cebolla caramelizada y salsa especial de la casa.',
    specialty: 'La combinación de tocino crocante, queso y carne smash.',
    price: 195,
    patties: 2,
    image: '/assets/images/smash/bacon.webp',
    alt: 'Smash de dos carnes con cheddar fundido y tiras de tocino crujiente',
    category: 'smash-burgers',
    badge: 'Más buscada',
  },
  bbq: {
    id: 'bbq-smash',
    name: 'La BBQ Smash',
    description: 'Dos carnes smash selladas a alta temperatura, queso cheddar, aros de cebolla crujientes, tocino y una generosa capa de salsa BBQ ahumada.',
    specialty: 'Ese contraste entre lo dulce, lo ahumado y lo crujiente.',
    price: 205,
    patties: 2,
    image: '/assets/images/smash/bbq.webp',
    alt: 'Smash de dos carnes con cheddar, tocino, aros de cebolla y salsa BBQ',
    category: 'smash-burgers',
  },
  goldenOnion: {
    id: 'golden-onion',
    name: 'La Golden Onion',
    description: 'Dos carnes smash aplastadas sobre una capa de cebolla finamente cortada, doradas juntas sobre la plancha, con doble queso y mayonesa especial.',
    specialty: 'Cebolla caramelizada directamente con la carne, creando un sabor intenso.',
    price: 185,
    patties: 2,
    image: '/assets/images/smash/golden-onion.webp',
    alt: 'Smash de dos carnes con cebolla dorada en la costra y queso fundido',
    category: 'smash-burgers',
  },
  tripleta: {
    id: 'tripleta-smash',
    name: 'La Tripleta Smash',
    description: 'Tres carnes smash con sus bordes bien dorados, triple queso americano, pepinillos, cebolla fresca y abundante salsa de la casa.',
    specialty: 'Tres capas de carne crujiente con queso fundido entre cada una.',
    price: 225,
    patties: 3,
    image: '/assets/images/smash/tripleta.webp',
    alt: 'Smash de tres carnes con queso americano, pepinillos y cebolla',
    category: 'smash-burgers',
  },
  super: {
    id: 'super-smash',
    name: 'La Super Smash',
    description: 'Nuestra creación más imponente. Tres carnes smash, triple queso, tocino crujiente, cebolla caramelizada, salsa BBQ y nuestra irresistible salsa especial.',
    specialty: 'Nuestra combinación más completa para los verdaderos amantes de las hamburguesas.',
    price: 235,
    patties: 3,
    image: '/assets/images/smash/super.webp',
    alt: 'Smash de tres carnes con queso, tocino crujiente y salsa BBQ',
    category: 'smash-burgers',
  },
} satisfies Record<string, BurgerMenuItem>;

export const menuItems: MenuItem[] = [
...Object.values(burgers),
// ── Combos ──
{
  id: 'combo-clasico',
  name: 'Combo Clásico',
  description: 'Hamburguesa + papas clásicas + refresco mediano.',
  price: 195,
  image: "https://images.unsplash.com/photo-1491765735347-a536c17e597f",
  alt: 'Burger combo with fries and soda on dark table, atmospheric lighting',
  category: 'combos'
},
{
  id: 'combo-grande',
  name: 'Combo Grande',
  description: 'Hamburguesa + papas grandes + bebida grande.',
  price: 225,
  image: "https://images.unsplash.com/photo-1654009783164-f592e9351421",
  alt: 'Large burger combo meal with oversized fries and drink, dark dramatic lighting',
  category: 'combos'
},
{
  id: 'combo-smash-doble',
  name: 'Combo Super Smash',
  description: 'La Super Smash + papas con queso + refresco mediano.',
  price: 295,
  image: burgers.super.image,
  alt: burgers.super.alt,
  category: 'combos',
  badge: 'COMBO ESPECIAL',
  bestSeller: true
},
// ── Acompañantes ──
{
  id: 'papas-clasicas',
  name: 'Papas Clásicas',
  description: 'Papas fritas crujientes con sal.',
  price: 55,
  image: "https://images.unsplash.com/photo-1601391958691-a99e858c9dc7",
  alt: 'Classic crispy french fries in paper cup, dark moody food photography',
  category: 'acompañantes'
},
{
  id: 'papas-con-queso',
  name: 'Papas con Queso',
  description: 'Papas fritas con salsa de queso derretido.',
  price: 75,
  image: '/assets/images/menu/papas-con-queso.webp',
  alt: 'Papas fritas doradas con salsa de queso derretido',
  category: 'acompañantes',
  badge: 'POPULAR'
},
{
  id: 'bacon-cheese-fries',
  name: 'Bacon Cheese Fries',
  description: 'Papas fritas, salsa de queso, bacon crujiente y cebollín.',
  price: 105,
  image: '/assets/images/menu/bacon-cheese-fries.webp',
  alt: 'Papas fritas cubiertas de queso fundido, tocino crujiente y cebollín',
  category: 'acompañantes',
  badge: 'CARGADAS',
  bestSeller: true
},
// ── Extras ──
{
  id: 'extra-bacon',
  name: 'Extra Bacon',
  description: 'Tiras de bacon crocante adicional.',
  price: 30,
  image: '/assets/images/menu/extra-bacon.webp',
  alt: 'Tres tiras de tocino crujiente',
  category: 'extras'
},
{
  id: 'extra-queso',
  name: 'Extra Queso',
  description: 'Loncha adicional de queso americano.',
  price: 20,
  image: '/assets/images/menu/extra-queso.webp',
  alt: 'Rebanadas cuadradas de queso americano',
  category: 'extras'
},
// ── Bebidas ──
{
  id: 'refresco',
  name: 'Refresco',
  description: 'Coca-Cola, Pepsi, Sprite o agua con gas. Tamaño mediano.',
  price: 35,
  image: '/assets/images/menu/refresco.webp',
  alt: 'Vaso de refresco de cola con hielo y burbujas',
  category: 'bebidas'
},
{
  id: 'agua',
  name: 'Agua',
  description: 'Agua purificada Aguazul, servida fría.',
  price: 25,
  image: '/assets/images/menu/aguazul.webp',
  alt: 'Botella de agua purificada Aguazul con etiqueta azul',
  category: 'bebidas'
}];


export const featuredItems: BurgerMenuItem[] = [
  burgers.bacon,
  burgers.doble,
  burgers.tripleta,
  burgers.super,
];
