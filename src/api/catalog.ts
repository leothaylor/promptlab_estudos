import catalogData from '../data/products.json';
import type { Product, Catalog } from '../types/product';

const catalog = catalogData as Catalog;

export function getAllProducts(): Product[] {
  return catalog.products as Product[];
}

export function getAvailableProducts(): Product[] {
  return catalog.products.filter(p => p.status === 'available-preview') as Product[];
}

export function getComingSoonProducts(): Product[] {
  return catalog.products.filter(p => p.status === 'coming-soon') as Product[];
}

export function getFeaturedProducts(): Product[] {
  return catalog.products.filter(p => p.featured) as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return catalog.products.find(p => p.slug === slug) as Product | undefined;
}

export function getCategories(): string[] {
  return catalog.categories;
}

export function getBrand() {
  return catalog.brand;
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return catalog.products as Product[];
  return catalog.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) ||
    p.searchTerms.some(t => t.toLowerCase().includes(q)) ||
    p.category.toLowerCase().includes(q)
  ) as Product[];
}

export function filterByCategory(category: string): Product[] {
  if (!category || category === 'Todos') return catalog.products as Product[];
  return catalog.products.filter(p => p.category === category) as Product[];
}

export function searchAndFilter(query: string, category: string): Product[] {
  let results = catalog.products as Product[];
  if (category && category !== 'Todos') {
    results = results.filter(p => p.category === category);
  }
  if (query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.searchTerms.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
  }
  return results;
}
