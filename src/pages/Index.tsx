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

// Add this CSS class at the top of your file or in your global CSS


const Index = () => {
  const { addToCart } = useCart();
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [famousSpicesApi, setFamousSpicesApi] = React.useState<CarouselApi>();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const allProducts = [...products, ...moreProducts, {
    id: 17,
    name: "Royal Saffron Threads",
    price: "$24.99",
    image: "/public/spices/d3.png",
    description: "Premium grade Kashmir saffron threads with intense aroma",
    rating: 4.9,
    tag: "Premium",
    pricePerKg: "$999.60/kg"
  }, {
    id: 18,
    name: "Black Cardamom Pods",
    price: "$12.99",
    image: "/public/spices/d1.png",
    description: "Large, smoky flavored black cardamom pods",
    rating: 4.7,
    tag: "Authentic",
    pricePerKg: "$129.90/kg"
  }];

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000); // Changed from 4000 to 5000ms for slower transitions

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

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filtered);
    setIsSearching(true);
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
          className="text-5xl md:text-7xl font-['BrushScript'] py-4 pt-10"
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
        
        <p className="text-xl md:text-2xl mb-8 text-white">
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
<section className="bg-beige py-10 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-display font-bold text-spiceBrown text-center mb-16">
      Featured Products
    </h2>
    
    <Carousel 
      className="w-full max-w-6xl mx-auto relative group"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 5
      }}
    >
      <CarouselContent>
        {[
          {
            id: 1,
            name: "Garam Masala",
            price: "$8.99",
            image: "/public/spices/d1.png",
            category: "Masala Blends"
          },
          {
            id: 2,
            name: "Turmeric Powder",
            price: "$6.99",
            image: "/public/spices/d2.png",
            category: "Ground Spices"
          },
          {
            id: 3,
            name: "Cumin Seeds",
            price: "$5.99",
            image: "/public/spices/d3.png",
            category: "Whole Spices"
          },
          {
            id: 4,
            name: "Cardamom Pods",
            price: "$9.99",
            image: "/public/spices/d2.png",
            category: "Whole Spices"
          },
          {
            id: 5,
            name: "Coriander Powder",
            price: "$6.99",
            image: "/public/spices/d1.png",
            category: "Ground Spices"
          },
          {
            id: 6,
            name: "Chaat Masala",
            price: "$7.99",
            image: "/public/spices/d3.png",
            category: "Masala Blends"
          },
          {
            id: 7,
            name: "Black Pepper",
            price: "$8.99",
            image: "/public/spices/d3.png",
            category: "Whole Spices"
          },
          {
            id: 8,
            name: "Tandoori Mix",
            price: "$9.99",
            image: "/public/spices/d3.png",
            category: "Specialty Mixes"
          }
        ].map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/5">
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
<section className="bg-cream px-4 relative overflow-hidden">
  {/* Gradient Background */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800 via-purple-900 to-pink-900 blur-3xl animate-glow-slow left-0 top-0"></div>
    <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-rose-800 via-amber-500 to-yellow-500 blur-3xl animate-glow-slow-reverse right-0 bottom-0"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative w-[580px] h-[580px] flex justify-center items-center">
        {/* Background SVG */}
        <svg className="absolute w-full h-full" viewBox="100 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M85,240 Q265,60 430,240 T535,465 Q385,615 220,465 T85,240" fill="#F5E6CC">
            <animate attributeName="d" 
              values="
                M85,240 Q265,60 430,240 T535,465 Q385,615 220,465 T85,240;
                M70,225 Q250,45 415,225 T520,450 Q370,600 205,450 T70,225;
                M100,255 Q280,75 445,255 T550,480 Q400,630 235,480 T100,255;
                M85,240 Q265,60 430,240 T535,465 Q385,615 220,465 T85,240" 
              dur="8s" repeatCount="indefinite" 
              keyTimes="0;0.3;0.7;1"
              calcMode="spline" 
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"/>
          </path>
        </svg>

        {/* GIF Animation */}
        <img 
          src="/public/spices/fl.gif"
          alt="Spices Animation"
          className="w-64 h-64 relative z-10"
        />
      </div>

      {/* Content on the right */}
      <div>
        <h2 className="text-4xl font-display font-bold text-spiceBrown mb-8">
          Why Choose Our Spices?
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
              <img src="/public/spices/organic-unscreen.gif" alt="Premium Quality" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-spiceBrown mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected premium spices sourced directly from authentic farms.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
              <img src="/public/spices/chef.gif" alt="Traditional Recipes" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-spiceBrown mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">Authentic family recipes passed down through generations.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
              <img src="/publicspices/organic.gif" alt="Natural Ingredients" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-spiceBrown mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">100% natural ingredients with no artificial additives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Our Famous Spices Section */}
<section className="bg-cream py-20 px-4 relative overflow-hidden">
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
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"/>
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
        slidesToScroll: 4
      }}
    >
      <CarouselContent>
        {[
          { 
            id: 9, 
            name: "Punjabi Garam Masala", 
            price: "$8.99", 
            image: "/public/spices/d3.png",
            review: "The authentic taste of Punjab in every dish! ❤️",
            reviewer: "Rajesh",
            tag: "Bestseller"
          },
          { 
            id: 10, 
            name: "Kashmiri Chili Powder", 
            price: "$7.99", 
            image: "/public/spices/d1.png",
            review: "Perfect color and heat balance. Love it!",
            reviewer: "Priya",
            tag: "Popular"
          },
          { 
            id: 11, 
            name: "Biryani Masala", 
            price: "$9.99", 
            image: "/public/spices/d2.png",
            review: "Makes restaurant-style biryani at home!",
            reviewer: "Sarah",
            tag: "Favorite"
          },
          { 
            id: 12, 
            name: "Panch Phoron", 
            price: "$6.99", 
            image: "/public/spices/d3.png",
            review: "Essential blend for Bengali cuisine.",
            reviewer: "Amit",
            tag: "Traditional"
          },
          { 
            id: 13, 
            name: "Sambar Powder", 
            price: "$7.99", 
            image: "/public/spices/d1.png",
            review: "Authentic South Indian flavors!",
            reviewer: "Maya",
            tag: "Regional"
          },
          { 
            id: 14, 
            name: "Butter Chicken Masala", 
            price: "$8.99", 
            image: "/public/spices/d2.png",
            review: "Restaurant quality taste every time.",
            reviewer: "David",
            tag: "Classic"
          },
          { 
            id: 15, 
            name: "Pav Bhaji Masala", 
            price: "$6.99", 
            image: "/public/spices/d1.png",
            review: "Perfect street food flavor at home!",
            reviewer: "Neha",
            tag: "Street Food"
          },
          { 
            id: 16, 
            name: "Chai Masala", 
            price: "$5.99", 
            image: "/public/spices/d2.png",
            review: "Makes the perfect cup of masala chai.",
            reviewer: "Emma",
            tag: "Essential"
          },
          { 
            id: 17, 
            name: "Himalayan Pink Salt", 
            price: "$7.99", 
            image: "/public/spices/d3.png",
            review: "The finest mineral-rich salt I've ever used!",
            reviewer: "Michael",
            tag: "Premium"
          },
          { 
            id: 18, 
            name: "Amchur Powder", 
            price: "$6.99", 
            image: "/public/spices/d1.png",
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
<section className="bg-beige py-10 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-center gap-4 mb-16">
      <h2 className="text-4xl font-display font-bold text-spiceBrown text-center">
        Discover Our Recipes
      </h2>
      <img 
        src="/public/spices/grind2.gif" 
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
              src={"/public/spices/spices logo.jpg"}
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
