import React, { useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = total > 50 ? 0 : 4.99;
  const finalTotal = total + shipping;

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-display font-bold text-spiceBrown">Shopping Cart</h1>
          <Link to="/products" className="text-spiceBrown hover:text-spiceBrown/80 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
        
        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm"
          >
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 mb-6 text-lg">Your cart is empty</p>
            <Link to="/products">
              <Button className="bg-spiceBrown text-cream hover:bg-opacity-90 px-8">
                Discover Products
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm flex gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-32 h-32 bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-xl text-spiceBrown mb-1">{item.name}</h3>
                        {('pricePerKg' in item) && <p className="text-gray-500 text-sm">{String(item.pricePerKg)}</p>}
                      </div>
                      <p className="text-xl font-semibold text-spiceBrown">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm h-fit space-y-6">
              <h3 className="font-semibold text-2xl mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `${shipping} €`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    Free shipping on orders over 50 €
                  </p>
                )}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span>{finalTotal.toFixed(2)} €</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Including VAT</p>
              </div>
              <Button 
                className="w-full bg-spiceBrown text-cream hover:bg-opacity-90 py-6 text-lg flex items-center justify-center gap-2"
                onClick={() => navigate('/checkout')}
              >
                <Lock className="w-5 h-5" />
                Secure Checkout
              </Button>
              <div className="flex items-center justify-center gap-4 pt-4">
                <img src="/payment-icons/visa.svg" alt="Visa" className="h-8" />
                <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-8" />
                <img src="/payment-icons/paypal.svg" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;