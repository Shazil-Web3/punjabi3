import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product: Product = {
    id: Number(id),
    name: "Product Name",
    price: "$6.99",
    image: "/placeholder.svg"
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Product added to cart!');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="aspect-square bg-[#f8f8f6] rounded-2xl shadow-md overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-display font-bold text-spiceBrown">{product.name}</h1>
            <p className="text-3xl text-sage font-semibold">{product.price}</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">(4.8)</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience the authentic taste of Punjab with our premium quality spices. 
              Each blend is carefully crafted to bring the perfect balance of flavors to your dishes.
            </p>
            <Button 
              className="w-full bg-spiceBrown hover:bg-opacity-90 text-cream py-6 rounded-xl font-medium text-lg flex items-center justify-center gap-3"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-6 h-6" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;