import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, Clock, ChefHat, Users, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel";
import { useCart } from '@/contexts/CartContext';
import { recipes } from './Recipe';
import SearchResults from '@/components/SearchResults';
import { Product } from '@/types/types';
import { products, moreProducts } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import type { EmblaOptionsType } from 'embla-carousel'

// Add this CSS class at the top of your file or in your global CSS


const Index = () => {
  const { addToCart } = useCart();
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [famousSpicesApi, setFamousSpicesApi] = React.useState<CarouselApi>();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [api]);

  // Auto-sliding effect for Famous Spices
  React.useEffect(() => {
    if (!famousSpicesApi) return;

    const interval = setInterval(() => {
      famousSpicesApi.scrollNext();
    }, 4000); // Slides every 4 seconds

    return () => clearInterval(interval);
  }, [famousSpicesApi]);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Chef",
      image: "/placeholder.svg",
      content: "The quality of spices is exceptional. They've transformed my cooking!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Restaurant Owner",
      image: "/placeholder.svg",
      content: "Best authentic Punjabi spices I've found outside of India."
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Food Blogger",
      image: "/placeholder.svg",
      content: "These spices have become a staple in my kitchen. Highly recommended!"
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success('Product added to cart!');
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

   
    
   
  };

  const carouselOptions: EmblaOptionsType = {
    align: "start",
    loop: true,
    skipSnaps: false,
    slidesToScroll: 5,
    containScroll: "trimSnaps"
  };

  return (
    <div className="min-h-screen">
  {/* Hero Section */}
<section className="relative h-[85vh]">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("/Spices/banner.jpg")',
      backgroundPosition: 'center',
    }}
  />

  {/* Navbar */}
  <div className="relative z-50">
    <Navbar />
  </div>

  {/* Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="container mx-auto px-6 md:px-10 py-6">
      <div className="max-w-3xl text-center md:text-left content-transition">
        <h1
          className="text-[10rem] md:text-[6rem] font-['BrushScript']  pt-10"
          style={{
            background: 'linear-gradient(to right, #FF6347, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '0.02em',
          }}
        >
          Discover Authentic Flavors
        </h1>
        
        <p className="text-l md:text-2xl -mt-4 mb-8 text-white">
          Authentic flavors from the heart of Punjab
        </p>
        
        <Link to="/products">
          <Button className="bg-[#CFB53B]  text-black px-8 py-6 text-lg mb-6 rounded-full  hover:bg-[#FFD700] transition-all duration-300 hover:shadow-lg hover:scale-105 text-xl ">
            Shop Now
          </Button>
        </Link>

        {/* Search Bar */}
        <div className="pt-10 w-[500px]">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search for spices, recipes, or products..."
              className="w-full px-6 py-2.5 pr-12 text-base rounded-full 
              border-2 border-[#FFE4E1] focus:border-[#CFB53B]
              focus:outline-none focus:ring-2 focus:ring-[#CFB53B]/50
              bg-white/85 backdrop-blur-sm transition-all duration-300 
              placeholder:text-gray-500/70
              shadow-[0_0_15px_rgba(255,99,71,0.15)]
              hover:shadow-[0_0_20px_rgba(255,99,71,0.2)]"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button 
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 
              flex items-center justify-center 
              bg-[#CFB53B] rounded-full hover:bg-[#B69D30] 
              transition-colors group-hover:scale-105 duration-300
              shadow-[0_0_10px_rgba(255,99,71,0.1)]"
              onClick={() => handleSearch(document.querySelector('input')?.value || '')}
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  {/* Animation Style */}
  <style>{`
    @keyframes slideIn {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .search-result-enter {
      animation: fadeInUp 0.3s ease-out forwards;
    }

    .search-result-exit {
      animation: fadeInUp 0.3s ease-out reverse forwards;
    }
  `}</style>
</section>

{/* Search Results */}
<AnimatePresence>
  {searchResults.length > 0 && (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-full bg-white/80 backdrop-blur-md shadow-lg rounded-lg mt-2 overflow-hidden"
    >
      <motion.div 
        className="p-2 max-h-[400px] overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {searchResults.map((product, index) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to={`/product/${product.id}`}
              className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300"
            >
              <motion.div 
                className="relative w-16 h-16 group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-sage font-medium bg-sage/10 px-2 py-1 rounded-full">
                  {product.rating} ★
                </span>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="bg-spiceBrown text-white hover:bg-spiceBrown/90"
                  >
                    Add to Cart
                  </Button>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Featured Products */}
<section className="bg-beige py-10 px-4 relative">
  {/* New Top Left Image */}
  <div className="absolute  -top-30 w-36 h-36 animate-float-slow">
    <img 
      src="/Spices/lo1.png" 
      alt="Decorative Spice" 
      className="w-full h-full object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-300"
    />
  </div>

  <div className="absolute  -right-2 -top-30 w-36 h-36 animate-float-slow">
    <img 
      src="/Spices/lo1.png" 
      alt="Decorative Spice" 
      className="w-full h-full object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-300"
    />
  </div>
  
  

  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-display font-bold text-spiceBrown text-center mb-16">
      Featured Products
    </h2>
    
    <Carousel
      opts={carouselOptions}
      className="w-full relative group"
      setApi={setApi}
      
    >
      <CarouselContent className="-ml-4">
        {[
          {
            id: 1,
            name: "Garam Masala",
            price: "$8.99",
            image: "/Spices/d1.png",
            category: "Masala Blends"
          },
          {
            id: 2,
            name: "Turmeric Powder",
            price: "$6.99",
            image: "/Spices/d2.png",
            category: "Ground Spices"
          },
          {
            id: 3,
            name: "Cumin Seeds",
            price: "$5.99",
            image: "/Spices/d3.png",
            category: "Whole Spices"
          },
          {
            id: 4,
            name: "Cardamom Pods",
            price: "$9.99",
            image: "/Spices/d2.png",
            category: "Whole Spices"
          },
          {
            id: 5,
            name: "Coriander Powder",
            price: "$6.99",
            image: "/Spices/d1.png",
            category: "Ground Spices"
          },
          {
            id: 6,
            name: "Chaat Masala",
            price: "$7.99",
            image: "/Spices/d3.png",
            category: "Masala Blends"
          },
          {
            id: 7,
            name: "Black Pepper",
            price: "$8.99",
            image: "/Spices/d3.png",
            category: "Whole Spices"
          },
          {
            id: 8,
            name: "Tandoori Mix",
            price: "$9.99",
            image: "/Spices/d3.png",
            category: "Specialty Mixes"

          },{
            id: 19,
            name: "Saffron ",
            price: "$24.99",
            pricePerKg: "$500/kg",
            rating: 5.0,
            image: "/Spices/d1.png",
            category: "premium",
            description: "Delicate threads of saffron that bring rich color and flavor."
          },{
            id: 20,
            name: "Saffron T",
            price: "$24.99",
            pricePerKg: "$500/kg",
            rating: 5.0,
            image: "/Spices/d1.png",
            category: "premium",
            description: "Delicate threads of saffron that bring rich color and flavor."
          }
        ].map((product) => (
          <CarouselItem key={product.id} className="pl-4 md:basis-1/5 lg:basis-1/5">
            <Link 
              to={`/product/${product.id}`}
              className="block relative group cursor-pointer"
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
                    <span className="bg-sage/10 text-sage text-sm px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-spiceBrown hover:bg-opacity-90 text-cream py-4 rounded-xl font-medium flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-20 h-14 w-14 border-2 border-spiceBrown/20 bg-white/80 backdrop-blur-sm text-spiceBrown hover:bg-spiceBrown hover:text-cream hover:border-spiceBrown transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100" />
      <CarouselNext className="-right-20 h-14 w-14 border-2 border-spiceBrown/20 bg-white/80 backdrop-blur-sm text-spiceBrown hover:bg-spiceBrown hover:text-cream hover:border-spiceBrown transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100" />
    </Carousel>
  </div>
</section>

{/* Features Section */}
<section className="bg-cream py-12 px-4 relative overflow-hidden">
  {/* Enhanced Gradient Background with stronger colors */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 blur-[100px] animate-glow-slow -left-32 -top-32"></div>
    <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 blur-[80px] animate-glow-slow-reverse right-0 bottom-0"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Enhanced Left Column - Image (Smaller size) */}
      <div className="relative group">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/30 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
        
        {/* Main Image Container (Reduced size) */}
        <div className="relative w-[500px] h-[500px] flex justify-center items-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl"></div>
          <img 
            src="/Spices/lo4.png"
            alt="Spices Animation"
            className="relative z-10 w-100 h-100 object-contain transform hover:rotate-12 transition-transform duration-500"
          />
          
          {/* Floating Elements (Adjusted sizes) */}
          
        </div>
      </div>

      {/* Enhanced Right Column - Content (More compact) */}
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-display font-bold text-spiceBrown leading-tight">
            Why Choose Our 
            <span className="text-sage block">Premium Spices?</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Experience the authentic flavors of Punjab with our carefully curated selection of premium spices.
          </p>
        </div>

        <div className="space-y-6">
          {/* Feature Cards (More compact) */}
          <div className="transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage/50 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img src="/Spices/organic-unscreen.gif" alt="Premium Quality" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-spiceBrown mb-1 group-hover:text-sage transition-colors">
                  Premium Quality
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hand-selected premium spices sourced directly from authentic farms.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-spiceBrown to-spiceBrown/50 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img src="/Spices/chef.gif" alt="Traditional Recipes" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-spiceBrown mb-1 group-hover:text-spiceBrown transition-colors">
                  Traditional Recipes
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Authentic family recipes passed down through generations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage/50 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img src="/Spices/organic.gif" alt="Natural Ingredients" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-spiceBrown mb-1 group-hover:text-sage transition-colors">
                  Natural Ingredients
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  100% natural ingredients with no artificial additives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    
    @keyframes float-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    
    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float-delayed 7s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: float-slow 9s ease-in-out infinite;
    }
  `}</style>
</section>

{/* Our Famous Spices Section */}
<section className="bg-cream py-20 px-4 relative overflow-hidden">
  {/* New Top Right Image */}
  <div className="absolute -left -top-30 w-32 h-32 animate-float-delayed">
    <img 
      src="/Spices/lo3.gif" 
      alt="Animated Spice" 
      className="w-full h-full object-contain transform rotate-12 hover:rotate-0 transition-transform duration-300"
    />
  </div>

  {/* Fork SVG in top right corner */}
  <div className="absolute -top-20 -right-64 -z-0 opacity-40">
    <svg width="580" height="580" viewBox="100 0 600 600" xmlns="http://www.w3.org/2000/svg">
      {/* Background Tilted & Smaller Fork Shape */}
      <g transform="rotate(-15 300 300) scale(0.8)">
        <path d="M270,600 Q260,500 265,350 Q240,350 240,100 Q270,80 290,100 Q290,350 310,350 Q310,100 330,100 Q350,80 380,100 Q380,350 355,350 Q360,500 350,600 Z" 
          fill="#F7C800" 
          stroke="none" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1 1; 1.05 1.05; 1 1" 
            dur="5s" 
            repeatCount="indefinite" 
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"/>
        </path>
      </g>
    </svg>
  </div>

  {/* Existing content */}
  <div className="max-w-7xl mx-auto relative">
    <h2 className="text-4xl font-display font-bold text-spiceBrown text-center mb-16">
      This is what others like.
    </h2>
    <Carousel 
      className="w-full max-w-6xl mx-auto relative group"
      setApi={setFamousSpicesApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 5
      }}
    >
      <CarouselContent>
        {[
          { 
            id: 9, 
            name: "Punjabi Garam Masala", 
            price: "$8.99", 
            image: "/Spices/d3.png",
            review: "The authentic taste of Punjab in every dish! ❤️",
            reviewer: "Rajesh",
            tag: "Bestseller"
          },
          { 
            id: 10, 
            name: "Kashmiri Chili Powder", 
            price: "$7.99", 
            image: "/Spices/d1.png",
            review: "Perfect color and heat balance. Love it!",
            reviewer: "Priya",
            tag: "Popular"
          },
          { 
            id: 11, 
            name: "Biryani Masala", 
            price: "$9.99", 
            image: "/Spices/d2.png",
            review: "Makes restaurant-style biryani at home!",
            reviewer: "Sarah",
            tag: "Favorite"
          },
          { 
            id: 12, 
            name: "Panch Phoron", 
            price: "$6.99", 
            image: "/Spices/d3.png",
            review: "Essential blend for Bengali cuisine.",
            reviewer: "Amit",
            tag: "Traditional"
          },
          { 
            id: 13, 
            name: "Sambar Powder", 
            price: "$7.99", 
            image: "/Spices/d1.png",
            review: "Authentic South Indian flavors!",
            reviewer: "Maya",
            tag: "Regional"
          },
          { 
            id: 14, 
            name: "Butter Chicken Masala", 
            price: "$8.99", 
            image: "/Spices/d2.png",
            review: "Restaurant quality taste every time.",
            reviewer: "David",
            tag: "Classic"
          },
          { 
            id: 15, 
            name: "Pav Bhaji Masala", 
            price: "$6.99", 
            image: "/Spices/d1.png",
            review: "Perfect street food flavor at home!",
            reviewer: "Neha",
            tag: "Street Food"
          },
          { 
            id: 16, 
            name: "Chai Masala", 
            price: "$5.99", 
            image: "/Spices/d2.png",
            review: "Makes the perfect cup of masala chai.",
            reviewer: "Emma",
            tag: "Essential"
          },
          { 
            id: 17, 
            name: "Himalayan Pink Salt", 
            price: "$7.99", 
            image: "/Spices/d3.png",
            review: "The finest mineral-rich salt I've ever used!",
            reviewer: "Michael",
            tag: "Premium"
          },
          { 
            id: 18, 
            name: "Amchur Powder", 
            price: "$6.99", 
            image: "/Spices/d1.png",
            review: "Perfect tangy flavor for chaats and curries!",
            reviewer: "Anita",
            tag: "Traditional"
          }
        ].map((spice) => (
          <CarouselItem key={spice.id} className="md:basis-1/5">
            <Link 
              to={`/product/${spice.id}`}
              className="block relative group cursor-pointer"
            >
              <div className="absolute bottom-0 w-full h-[80%] bg-[#f8f8f6] rounded-2xl transition-all duration-300 group-hover:shadow-xl" />
              
              <div className="relative">
                <div className="relative z-10 mb-4 -mt-12 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={spice.image}
                    alt={spice.name}
                    className="w-[240px] h-[240px] mx-auto object-contain"
                  />
                </div>
                
                <div className="relative z-10 px-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl text-spiceBrown">
                      {spice.name}
                    </h3>
                    <span className="bg-sage/10 text-sage text-xs px-2 py-1 rounded-full">
                      {spice.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm italic mb-3">"{spice.review}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-spiceBrown font-semibold">
                      {spice.price}
                    </p>
                    <p className="text-sage text-sm">- {spice.reviewer}</p>
                  </div>
                  <Button 
                    className="w-full bg-spiceBrown hover:bg-opacity-90 text-cream py-4 rounded-xl font-medium flex items-center justify-center gap-2 mt-4"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      handleAddToCart(spice);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-20 h-14 w-14 border-2 border-spiceBrown/20 bg-white/80 backdrop-blur-sm text-spiceBrown hover:bg-spiceBrown hover:text-cream hover:border-spiceBrown transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100" />
      <CarouselNext className="-right-20 h-14 w-14 border-2 border-spiceBrown/20 bg-white/80 backdrop-blur-sm text-spiceBrown hover:bg-spiceBrown hover:text-cream hover:border-spiceBrown transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100" />
    </Carousel>
  </div>
</section>

{/* Our Recipes Section */}
<section className="bg-beige py-10 px-4 relative">
  {/* New Top Left Image */}
  {/* New Left Side Image */}
  <div className="absolute right-10 top-8-translate-y-1/2 w-40 h-40 animate-float">
    <img 
      src="/Spices/lo2.png" 
      alt="Decorative Spice" 
      className="w-full h-full object-contain transform rotate-12 hover:rotate-0 transition-transform duration-300"
    />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-center gap-4 mb-16">
      <h2 className="text-4xl font-display font-bold text-spiceBrown text-center">
        Discover Our Recipes
      </h2>
      <img 
        src="/Spices/grind2.gif" 
        alt="Cooking" 
        className="w-20 h-20 object-contain"
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes && recipes.length > 0 && recipes.slice(0, 3).map((recipe) => (
        <Link 
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <img 
              src={"/Spices/spices logo.jpg"}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {recipe.name}
              </h3>
              <div className="flex items-center space-x-4">
                <span className="text-white/90 flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {recipe.time}
                </span>
                <span className="text-white/90 flex items-center text-sm">
                  <ChefHat className="w-4 h-4 mr-1" />
                  {recipe.difficulty}
                </span>
                <span className="text-white/90 flex items-center text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  Serves {recipe.servings}
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
    
    <div className="text-center mt-12">
      <Link 
        to="/recipes"
        className="inline-flex items-center justify-center px-8 py-3 bg-spiceBrown text-cream rounded-lg hover:bg-opacity-90 transition-colors"
      >
        View All Recipes
      </Link>
    </div>
  </div>
</section>

{/* Why Choose Us */}
<section className="bg-sage py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-display font-bold text-cream text-center mb-12">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="w-8 h-8 text-spiceBrown" />
        </div>
        <h3 className="font-display font-bold text-xl text-cream mb-2">Premium Quality</h3>
        <p className="text-cream/90">Hand-picked, premium quality spices sourced directly from Punjab</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
          <Truck className="w-8 h-8 text-spiceBrown" />
        </div>
        <h3 className="font-display font-bold text-xl text-cream mb-2">Fast Delivery</h3>
        <p className="text-cream/90">Quick and reliable shipping to your doorstep</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-spiceBrown" />
        </div>
        <h3 className="font-display font-bold text-xl text-cream mb-2">100% Authentic</h3>
        <p className="text-cream/90">Guaranteed authentic Punjabi spices and blends</p>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-spiceBrown text-cream py-12 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 className="font-display font-bold text-xl mb-4">Punjabi Spices</h3>
      <p className="text-cream/80">Bringing authentic Punjabi flavors to your kitchen since 1990</p>
    </div>
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link to="/wholesale" className="hover:text-cream/80">Wholesale</Link></li>
        <li><a href="#" className="hover:text-cream/80">Products</a></li>
        <li><a href="#" className="hover:text-cream/80">Blog</a></li>
        <li><a href="#" className="hover:text-cream/80">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Contact Us</h4>
      <ul className="space-y-2">
        <li>123 Spice Street</li>
        <li>Punjab, India</li>
        <li>Phone: (123) 456-7890</li>
        <li>Email: info@punjabispices.com</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Newsletter</h4>
      <p className="mb-4">Subscribe to our newsletter for recipes and updates</p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded bg-cream/10 text-cream placeholder:text-cream/50 flex-grow"
        />
        <Button className="bg-cream text-spiceBrown hover:bg-cream/90">
          Subscribe
        </Button>
      </div>
    </div>
  </div>
</footer>
</div>
);
};

export default Index;
