import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Clock, ChefHat, Users, Search, Utensils, Heart, MapPin, Phone, Mail, Image } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const recipes = [
    {
      id: 1,
      name: "Butter Chicken",
      time: "45 mins",
      difficulty: "Medium",
      servings: 4,
      description: "Classic Punjabi butter chicken with rich, creamy gravy",
      image: "/Spices/main-food.jpg",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Dal Makhani",
      time: "60 mins",
      difficulty: "Medium",
      servings: 6,
      description: "Creamy black lentils slow-cooked to perfection",
      image: "/Spices/main-food.jpg",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Punjabi Chole",
      time: "40 mins",
      difficulty: "Easy",
      servings: 4,
      description: "Spicy chickpea curry with authentic Punjabi spices",
      image: "/Spices/mount.png",
      category: "Main Course"
    },
    {
      id: 4,
      name: "Sarson Ka Saag",
      time: "90 mins",
      difficulty: "Hard",
      servings: 6,
      description: "Traditional Punjabi mustard greens preparation",
      image: "/Spices/mount.png",
      category: "Vegetarian"
    },
    {
      id: 5,
      name: "Tandoori Roti",
      time: "30 mins",
      difficulty: "Easy",
      servings: 8,
      description: "Classic Indian flatbread with perfect char",
      image: "/Spices/mount.png",
      category: "Bread"
    },
    {
      id: 6,
      name: "Punjabi Kadhi",
      time: "50 mins",
      difficulty: "Medium",
      servings: 4,
      description: "Yogurt-based curry with crispy pakoras",
      image: "/Spices/mount.png",
      category: "Main Course"
    }
  ];

  // Search functionality
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#FABC3F]">
        <div className="absolute inset-0 bg-[url('/spices/recipe-hero.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply" />
        <Navbar />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold text-black/80 mb-4">
              Punjabi Recipes
            </h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Discover authentic Punjabi recipes passed down through generations
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-[#E85C0D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Explore Our Culinary Heritage
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Each recipe is crafted with love and tradition, featuring our premium spices 
              to help you create authentic Punjabi dishes in your own kitchen.
            </p>
          </div>

          {/* Recipe Categories Grid - keeping existing structure but updating colors */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Utensils className="w-8 h-8" />,
                title: "Main Course",
                description: "Hearty dishes for your table",
                count: "12+ Recipes"
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: "Traditional",
                description: "Authentic family recipes",
                count: "8+ Recipes"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Quick & Easy",
                description: "Ready in 30 minutes or less",
                count: "6+ Recipes"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Party Special",
                description: "Perfect for gatherings",
                count: "10+ Recipes"
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

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Find Your Perfect Recipe
              </h3>
              <p className="text-white/90">
                Search through our collection of authentic Punjabi recipes
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search recipes by name, category, or description..."
                className="w-full px-6 py-4 pr-12 rounded-full border-2 border-sage/20 
                focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/50 
                bg-white/90 text-lg shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-sage" />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Grid Section */}
      <section className="py-20 px-4 bg-[#C7253E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Link 
                to={`/recipe/${recipe.id}`}
                key={recipe.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform 
                transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <img 
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
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
                <div className="p-6">
                  <p className="text-gray-600">{recipe.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm">
                      {recipe.category}
                    </span>
                    <Button className="bg-spiceBrown text-cream hover:bg-opacity-90">
                      View Recipe
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Spice Street, Punjab
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 123-456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@punjabispices.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for recipes and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/50 flex-grow"
              />
              <Button className="bg-white text-[#821131] hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2024 Punjabi Spices. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Recipes;