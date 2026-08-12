export type ProductStatus = 'available-preview' | 'coming-soon';

export type DemoItemStatus = 'critical' | 'attention' | 'positive' | 'neutral';

export interface DemoItem {
  label: string;
  value: string;
  status: DemoItemStatus;
}

export interface Demonstration {
  title: string;
  disclaimer: string;
  items: DemoItem[];
}

export interface Product {
  id: string;
  code: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  price: null;
  image: null;
  status: ProductStatus;
  featured: boolean;
  complexity: string | null;
  problem: string | null;
  idealFor: string[];
  inputs: string[];
  outputs: string[];
  benefits: string[];
  recommendedUse: string | null;
  compatibility: string | null;
  demonstration: Demonstration | null;
  searchTerms: string[];
}

export interface Brand {
  name: string;
  temporary: boolean;
  tagline: string;
  pricesVisible: boolean;
  checkoutEnabled: boolean;
}

export interface Catalog {
  catalogVersion: string;
  catalogStatus: string;
  brand: Brand;
  categories: string[];
  products: Product[];
}
