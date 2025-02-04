export interface Product {
  id: number;
  name: string;
  price: string;
  pricePerKg: string;
  rating: number;
  image: string;
  tag?: string;
  review?: string;
  reviewer?: string;
  category?: string;
  description?: string;
  quantity?: number;
  discount?: number;
} 