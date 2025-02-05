import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { Heart, Star, ShoppingBag, Package, Leaf, Search, Percent, Award, Clock, Shield, Truck, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { products, moreProducts } from '../data/products';
import { Product } from '@/types/types';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'masalas', name: 'Masala Blends' },
    { id: 'whole-spices', name: 'Whole Spices' },
    { id: 'ground-spices', name: 'Ground Spices' },
    { id: 'specialty', name: 'Specialty Mixes' },
    { id: 'toppings', name: 'Toppings' }
  ];

  const allProducts = [...products, ...moreProducts];
  
  const filteredProducts = allProducts.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success('Product added to cart!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#FABC3F]">
        <div className="absolute inset-0 bg-[url('/Spices/products-hero.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply" />
        <Navbar />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold text-black/80 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Discover our premium collection of authentic Punjabi spices
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section with Categories */}
      <section className="py-20 px-4 bg-[#E85C0D] relative overflow-hidden">
        {/* Rainbow Glow Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 blur-3xl animate-glow-slow left-0 top-0"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-rose-800 via-amber-500 to-yellow-500 blur-3xl animate-glow-slow-reverse right-0 bottom-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-spiceBrown mb-6">
              Discover Our Spice Collection
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hand-picked and carefully curated spices that bring authentic Punjabi flavors to your kitchen.
              Each product is selected for its quality and authenticity.
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Package className="w-8 h-8" />,
                title: "Whole Spices",
                description: "Pure, unground spices",
                count: "15+ Products"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Ground Spices",
                description: "Freshly ground blends",
                count: "20+ Products"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Spice Blends",
                description: "Traditional masalas",
                count: "10+ Products"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="bg-cream/30 p-8 rounded-xl text-center transform transition-all 
                hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                mx-auto mb-4 text-spiceBrown shadow-md group-hover:bg-spiceBrown 
                group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-spiceBrown mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-block bg-sage/10 text-sage px-4 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </div>
            ))}
          </div>

          {/* Category Filter Buttons */}
          <div className="bg-beige rounded-2xl p-12 shadow-lg mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-3xl font-display font-bold text-spiceBrown mb-4">
                Browse By Category
              </h3>
              <p className="text-gray-600 mb-8">
                Find the perfect spices for your cooking needs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedCategory === category.id 
                      ? 'bg-spiceBrown text-cream shadow-lg scale-105' 
                      : 'border-spiceBrown text-spiceBrown hover:bg-spiceBrown/10'
                    }
                  `}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        </div>
      </section>

      

      <footer className="bg-[#821131] text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Punjabi Spices</h3>
            <p className="text-white/80">Bringing authentic Punjabi flavors to your kitchen since 1990</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white/80">Home</Link></li>
              <li><Link to="/products" className="hover:text-white/80">Products</Link></li>
              <li><Link to="/recipes" className="hover:text-white/80">Recipes</Link></li>
              <li><Link to="/wholesale" className="hover:text-white/80">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@punjabispices.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/80"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white/80"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white/80"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (product: Product) => void }) => {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-xl">
          {/* Product Badge */}
          {product.tag && (
            <span className="absolute top-3 right-3 bg-red-50 text-red-500 text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {product.tag}
            </span>
          )}

          {/* Product Image Container */}
          <div className="relative pt-[80%] mb-4">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-3">
            {/* Updated Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">({product.rating})</span>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-spiceBrown transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs line-clamp-2 mb-2">{product.description}</p>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-sage" />
                Premium Quality
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-sage" />
                Fresh Stock
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-sage" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3 text-sage" />
                Secure Package
              </div>
            </div>

            {/* Updated Price and Add to Cart Section */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex flex-col items-start">
                <p className="text-spiceBrown font-bold text-lg">{product.price}</p>
                <p className="text-xs text-gray-500">{product.pricePerKg}</p>
                {product.discount && (
                  <span className="bg-red-50 text-red-500 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 mt-1">
                    <Percent className="w-3 h-3" />
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onAddToCart(product);
                }}
                className="bg-white border-2 border-spiceBrown text-spiceBrown hover:bg-spiceBrown hover:text-white 
                transition-all duration-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;