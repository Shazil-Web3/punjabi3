import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/types';

interface SearchResultsProps {
  results: Product[];
  isSearching: boolean;
  onAddToCart: (product: Product) => void;
}

const SearchResults = ({ results, isSearching, onAddToCart }: SearchResultsProps) => {
  if (!isSearching || results.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-white/80 backdrop-blur-md py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-spiceBrown mb-8">
            Search Results ({results.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <div className="absolute bottom-0 w-full h-[80%] bg-[#f8f8f6] rounded-2xl transition-all duration-300 group-hover:shadow-xl" />
                
                <div className="relative">
                  <div className="relative z-10 mb-4 -mt-12 transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-[240px] h-[240px] mx-auto object-contain"
                    />
                  </div>
                  
                  <div className="relative z-10 px-6 pb-6">
                    <h3 className="font-display font-bold text-xl mb-2 text-spiceBrown">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-spiceBrown font-semibold text-lg">
                        {product.price}
                      </p>
                      {product.tag && (
                        <span className="bg-sage/10 text-sage text-sm px-3 py-1 rounded-full">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <Button 
                      className="w-full bg-spiceBrown hover:bg-opacity-90 text-cream py-4 rounded-xl font-medium flex items-center justify-center gap-2"
                      onClick={() => onAddToCart(product)}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default SearchResults; 