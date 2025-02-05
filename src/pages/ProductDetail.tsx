import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import { 
  ShoppingBag, 
  Star, 
  Package, 
  Shield, 
  Truck, 
  Clock,
  ChefHat,
  ArrowLeft,
  Minus,
  Plus,
  Info
} from 'lucide-react';
import { Product } from '@/types/types';
import { products, moreProducts } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('100g');
  
  useEffect(() => {
    const allProducts = [...products, ...moreProducts];
    const foundProduct = allProducts.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      toast.success('Product added to cart!');
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-spiceBrown mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-sm ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="aspect-square bg-[#f8f8f6] rounded-xl overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-300 hover:scale-105"
                />
              </div>
              {product.tag && (
                <span className="absolute top-4 right-4 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating} Reviews)</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-spiceBrown">{product.price}</span>
                  <span className="text-sm text-gray-500">{product.pricePerKg}</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Select Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {['100g', '250g', '500g'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                        selectedSize === size 
                          ? 'border-spiceBrown bg-spiceBrown/5 text-spiceBrown' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={decrementQuantity}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Shield className="w-4 h-4" />, text: "Premium Quality" },
                  { icon: <Truck className="w-4 h-4" />, text: "Fast Delivery" },
                  { icon: <Package className="w-4 h-4" />, text: "Secure Package" },
                  { icon: <Clock className="w-4 h-4" />, text: "Fresh Stock" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="text-sage">{feature.icon}</div>
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-spiceBrown" />
                  <h3 className="font-medium text-gray-900">Product Details</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-spiceBrown hover:bg-spiceBrown/90 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart • {product.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;