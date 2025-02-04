import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Animate fade out
    const element = document.body;
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease';
    
    // Navigate after animation
    setTimeout(() => {
      navigate('/signup');
      // Reset opacity
      element.style.opacity = '1';
    }, 300);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#731a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-['Great_Vibes'] text-[#FFD700]">
              Punjabi Spices
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12">
              <Link 
                to="/" 
                className="text-white hover:text-white/80 transition-colors relative group z-50 text-lg hover:glow"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link 
                to="/products" 
                className="text-white hover:text-white/80 transition-colors relative group z-50 text-lg hover:glow"
              >
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link 
  to="/wholesale" 
  className="text-white hover:text-white/80 transition-colors relative group z-50 text-lg hover:glow"
>
  Wholesale
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
</Link>
              <Link 
                to="/recipes" 
                className="text-white hover:text-white/80 transition-colors relative group z-50 text-lg hover:glow"
              >
                Recipes
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProfileClick}
              className="cursor-pointer"
            >
              <User className="h-6 w-6 text-white hover:text-white/80 transition-colors" />
            </motion.div>
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-white hover:text-white/80 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;