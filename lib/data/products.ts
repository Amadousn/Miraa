import type { Product } from '@/lib/types'

export const products: Product[] = [
  {
    id: 'manteau-cachemire-camel',
    name: 'Manteau Cachemire Camel',
    price: 1290,
    category: 'Manteaux',
    collection: 'essentiels',
    images: [
      'https://picsum.photos/seed/manteau-1/800/1067',
      'https://picsum.photos/seed/manteau-2/800/1067',
    ],
    sizes: ['46', '48', '50', '52', '54'],
    materials: '100% Cachemire grade A — Mongolie',
    care: 'Nettoyage à sec uniquement',
    description:
      'Manteau droit à épaules tombantes, col cranté, boutonnage simple. Silhouette ample et structurée. La pièce de résistance.',
    isNew: true,
    isBestseller: false,
    colors: [
      { name: 'Camel', hex: '#C4A882' },
      { name: 'Sable', hex: '#D4B896' },
    ],
  },
  {
    id: 'pantalon-laine-marron',
    name: 'Pantalon Droit Laine',
    price: 480,
    category: 'Pantalons',
    collection: 'essentiels',
    images: [
      'https://picsum.photos/seed/pantalon-1/800/1067',
      'https://picsum.photos/seed/pantalon-2/800/1067',
    ],
    sizes: ['44', '46', '48', '50', '52'],
    materials: '98% Laine mérinos, 2% Élasthanne — Italie',
    care: 'Nettoyage à sec recommandé',
    description:
      'Pantalon droit taille mi-haute, pince centrale, tombé impeccable. La base de toute garde-robe masculine construite.',
    isNew: true,
    isBestseller: true,
    colors: [
      { name: 'Marron profond', hex: '#3D2614' },
      { name: 'Camel', hex: '#C4A882' },
    ],
  },
  {
    id: 'chemise-lin-beige',
    name: 'Chemise Lin Beige',
    price: 290,
    category: 'Hauts',
    collection: 'ete',
    images: [
      'https://picsum.photos/seed/chemise-1/800/1067',
      'https://picsum.photos/seed/chemise-2/800/1067',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: '100% Lin lavé — Portugal',
    care: 'Lavage délicat 30°, séchage plat',
    description:
      'Chemise col classique en lin lavé. Coupe légèrement oversize, manches longues retroussables. Le lin qui respire.',
    isNew: true,
    isBestseller: false,
    colors: [
      { name: 'Beige naturel', hex: '#F5EFE6' },
      { name: 'Marron clair', hex: '#B09070' },
    ],
  },
  {
    id: 'veste-tailleur-marron',
    name: 'Veste Tailleur Structurée',
    price: 740,
    category: 'Vestes',
    collection: 'essentiels',
    images: [
      'https://picsum.photos/seed/veste-1/800/1067',
      'https://picsum.photos/seed/veste-2/800/1067',
    ],
    sizes: ['44', '46', '48', '50', '52'],
    materials: '100% Crêpe de laine — France',
    care: 'Nettoyage à sec',
    description:
      'Veste tailleur col châle, double boutonnage, épaulettes légères. Taille marquée sans être contraignante.',
    isNew: false,
    isBestseller: true,
    colors: [
      { name: 'Marron nuit', hex: '#2C1A0E' },
      { name: 'Taupe', hex: '#9B8B7A' },
    ],
  },
  {
    id: 'pull-merinos-col-roule',
    name: 'Pull Mérinos Col Roulé',
    price: 360,
    category: 'Hauts',
    collection: 'essentiels',
    images: [
      'https://picsum.photos/seed/pull-1/800/1067',
      'https://picsum.photos/seed/pull-2/800/1067',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: '100% Laine mérinos extra-fine — Australie',
    care: 'Lavage main froid 20°, séchage à plat',
    description:
      'Pull col roulé en mérinos extra-fine, coupe droite légèrement ample. Chaleur discrète et tombé parfait.',
    isNew: false,
    isBestseller: true,
    colors: [
      { name: 'Camel', hex: '#C4A882' },
      { name: 'Beige', hex: '#D4B896' },
      { name: 'Marron', hex: '#7A5C42' },
    ],
  },
  {
    id: 'pardessus-laine-sable',
    name: 'Pardessus Laine Sable',
    price: 980,
    category: 'Manteaux',
    collection: 'ete',
    images: [
      'https://picsum.photos/seed/pardessus-1/800/1067',
      'https://picsum.photos/seed/pardessus-2/800/1067',
    ],
    sizes: ['46', '48', '50', '52'],
    materials: '80% Laine, 20% Cachemire — Écosse',
    care: 'Nettoyage à sec uniquement',
    description:
      'Pardessus long mi-saison, col croisé, ceinture intégrée amovible. La pièce maîtresse entre deux saisons.',
    isNew: false,
    isBestseller: false,
    colors: [{ name: 'Sable', hex: '#D4B896' }],
  },
  {
    id: 'jean-droit-brut',
    name: 'Jean Droit Brut',
    price: 320,
    category: 'Pantalons',
    collection: 'ete',
    images: [
      'https://picsum.photos/seed/jean-1/800/1067',
      'https://picsum.photos/seed/jean-2/800/1067',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    materials: '100% Coton selvedge — Japon',
    care: 'Lavage à froid 30°, retourné',
    description:
      "Jean droit 5 poches en denim selvedge japonais. Coupe intemporelle, délavage minimal. S'améliore avec le temps.",
    isNew: true,
    isBestseller: false,
    colors: [{ name: 'Indigo brut', hex: '#2C3A5A' }],
  },
  {
    id: 'polo-coton-pique',
    name: 'Polo Coton Piqué',
    price: 210,
    category: 'Hauts',
    collection: 'ete',
    images: [
      'https://picsum.photos/seed/polo-1/800/1067',
      'https://picsum.photos/seed/polo-2/800/1067',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: '100% Coton pima piqué — Pérou',
    care: 'Lavage machine 30°',
    description:
      "Polo col 3 boutons en coton pima piqué. Coupe droite légèrement oversize. L'essentiel sans ornement superflu.",
    isNew: false,
    isBestseller: true,
    colors: [
      { name: 'Beige', hex: '#F5EFE6' },
      { name: 'Marron clair', hex: '#B09070' },
      { name: 'Marron profond', hex: '#2C1A0E' },
    ],
  },
]

export const newArrivals = products.filter((p) => p.isNew)
export const bestsellers = products.filter((p) => p.isBestseller)
