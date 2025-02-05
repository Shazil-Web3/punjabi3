import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { 
  Clock, 
  ChefHat, 
  Users, 
  Utensils,
  Flame,
  Timer,
  Scale,
  Info,
  Tag,
  
} from 'lucide-react';

// Recipe data
export const recipes = [
  {
    id: 1,
    name: "Butter Chicken",
    time: "45 mins",
    difficulty: "Medium",
    servings: 4,
    image: "/Spices/main-food.jpg",
    description: "Creamy, rich and packed with authentic Indian flavors",
    category: "Main Course",
    ingredients: [
      "800g chicken thighs",
      "2 tbsp Garam Masala",
      "1 tbsp Turmeric",
      "4 Cardamom pods",
      "400ml tomato sauce",
      "200ml heavy cream"
    ],
    instructions: [
      "Marinate the chicken with yogurt and spices",
      "Cook the marinated chicken in a preheated oven",
      "Prepare the curry sauce with tomatoes and cream",
      "Combine chicken with the sauce and simmer"
    ]
  },
  {
    id: 2,
    name: "Palak Paneer",
    time: "30 mins",
    difficulty: "Easy",
    servings: 3,
    image: "/Spices/main-food.jpg",
    description: "Creamy spinach curry with fresh cottage cheese",
    category: "Vegetarian",
    ingredients: [
      "500g spinach",
      "250g paneer",
      "2 tbsp Garam Masala",
      "1 onion",
      "3 tomatoes",
      "Cream to taste"
    ],
    instructions: [
      "Blanch and puree the spinach",
      "Prepare the onion-tomato base",
      "Add spices and cook the gravy",
      "Add paneer cubes and finish with cream"
    ]
  },
  {
    id: 3,
    name: "Dal Makhani",
    time: "50 mins",
    difficulty: "Medium",
    servings: 6,
    image: "/Spices/main-food.jpg",
    description: "Creamy black lentils slow-cooked to perfection",
    category: "Vegetarian",
    ingredients: [
      "300g black lentils",
      "100g red kidney beans",
      "2 tbsp butter",
      "1 cup cream",
      "Garam Masala to taste"
    ],
    instructions: [
      "Soak lentils and beans overnight",
      "Cook with spices until tender",
      "Add cream and butter",
      "Simmer until creamy"
    ]
  },
  {
    id: 4,
    name: "Chicken Biryani",
    time: "60 mins",
    difficulty: "Hard",
    servings: 8,
    image: "/Spices/main-food.jpg",
    description: "Aromatic rice dish layered with spiced chicken",
    category: "Main Course",
    ingredients: [
      "1kg Basmati rice",
      "800g chicken",
      "Biryani masala",
      "Saffron",
      "Fried onions",
      "Mint and coriander"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices",
      "Cook rice till 70% done",
      "Layer rice and chicken",
      "Dum cook for 20 minutes"
    ]
  },
  {
    id: 5,
    name: "Tandoori Roti",
    time: "25 mins",
    difficulty: "Easy",
    servings: 10,
    image: "/Spices/main-food.jpg",
    description: "Traditional Indian flatbread",
    category: "Appetizers",
    ingredients: [
      "Whole wheat flour",
      "Water",
      "Salt",
      "Oil",
      "Butter for brushing"
    ],
    instructions: [
      "Knead the dough",
      "Rest for 15 minutes",
      "Roll into circles",
      "Cook on high heat"
    ]
  },
  {
    id: 6,
    name: "Punjabi Chole",
    time: "40 mins",
    difficulty: "Medium",
    servings: 6,
    image: "/Spices/main-food.jpg",
    description: "Spicy chickpea curry, a Punjabi classic",
    category: "Main Course",
    ingredients: [
      "2 cups chickpeas",
      "2 onions",
      "3 tomatoes",
      "Chole masala",
      "Tea bag for color"
    ],
    instructions: [
      "Soak chickpeas overnight",
      "Prepare onion-tomato masala",
      "Add spices and cook",
      "Simmer until tender"
    ]
  },
  {
    id: 7,
    name: "Gajar Ka Halwa",
    time: "45 mins",
    difficulty: "Medium",
    servings: 8,
    image: "/Spices/main-food.jpg",
    description: "Traditional carrot dessert with cardamom",
    category: "Desserts",
    ingredients: [
      "1kg carrots",
      "Full-fat milk",
      "Sugar",
      "Cardamom powder",
      "Nuts for garnish"
    ],
    instructions: [
      "Grate carrots finely",
      "Cook with milk until reduced",
      "Add sugar and cardamom",
      "Garnish with nuts"
    ]
  },
  {
    id: 8,
    name: "Samosa",
    time: "60 mins",
    difficulty: "Hard",
    servings: 12,
    image: "/Spices/main-food.jpg",
    description: "Crispy pastry filled with spiced potatoes",
    category: "Appetizers",
    ingredients: [
      "All-purpose flour",
      "Potatoes",
      "Green peas",
      "Garam masala",
      "Oil for frying"
    ],
    instructions: [
      "Prepare the dough",
      "Cook potato filling",
      "Shape samosas",
      "Deep fry until golden"
    ]
  },
  {
    id: 9,
    name: "Malai Kofta",
    time: "55 mins",
    difficulty: "Hard",
    servings: 6,
    image: "/Spices/main-food.jpg",
    description: "Paneer dumplings in rich cream sauce",
    category: "Vegetarian",
    ingredients: [
      "Paneer",
      "Potatoes",
      "Cream",
      "Cashew paste",
      "Garam masala"
    ],
    instructions: [
      "Prepare kofta mixture",
      "Shape and fry koftas",
      "Make creamy gravy",
      "Combine and serve"
    ]
  },
  {
    id: 10,
    name: "Gulab Jamun",
    time: "40 mins",
    difficulty: "Medium",
    servings: 15,
    image: "/Spices/main-food.jpg",
    description: "Sweet milk dumplings in rose syrup",
    category: "Desserts",
    ingredients: [
      "Milk powder",
      "All-purpose flour",
      "Sugar syrup",
      "Cardamom",
      "Rose water"
    ],
    instructions: [
      "Make the dough",
      "Shape into balls",
      "Deep fry until golden",
      "Soak in sugar syrup"
    ]
  }
];

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    React.useEffect(() => {
      navigate('/recipes');
    }, [navigate]);
    return null;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section with Enhanced Styling */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center space-x-3 mb-4">
              <Tag className="w-5 h-5 text-sage" />
              <span className="text-cream/90 text-sm font-medium tracking-wider uppercase">
                {recipe.category}
              </span>
            </div>
            <h1 className="text-6xl font-display font-bold text-cream mb-6">
              {recipe.name}
            </h1>
            <p className="text-xl text-cream/90 mb-8 max-w-3xl">
              {recipe.description}
            </p>
            <div className="flex items-center space-x-8">
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 mr-2 text-sage" />
                <span className="text-cream/90">{recipe.time}</span>
              </div>
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                <ChefHat className="w-5 h-5 mr-2 text-sage" />
                <span className="text-cream/90">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                <Users className="w-5 h-5 mr-2 text-sage" />
                <span className="text-cream/90">Serves {recipe.servings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content with Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ingredients Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                
                <h2 className="text-2xl font-display font-bold text-spiceBrown">
                  Ingredients
                </h2>
              </div>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-700 p-3 rounded-lg hover:bg-cream/50 transition-colors"
                  >
                    <Utensils className="w-4 h-4 mr-3 text-sage flex-shrink-0" />
                    <span className="text-gray-600">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <Flame className="w-6 h-6 text-spiceBrown" />
                <h2 className="text-2xl font-display font-bold text-spiceBrown">
                  Cooking Instructions
                </h2>
              </div>
              <ol className="space-y-8">
                {recipe.instructions.map((instruction, index) => (
                  <li 
                    key={index}
                    className="flex group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center font-medium mr-4 group-hover:bg-spiceBrown transition-colors">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-700 pt-1 leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Additional Tips Section */}
            <div className="mt-8 bg-sage/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-sage" />
                <h3 className="text-xl font-display font-bold text-spiceBrown">
                  Pro Tips
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Timer className="w-4 h-4 mr-3 text-sage" />
                  <span>Prep all ingredients before starting to cook</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Scale className="w-4 h-4 mr-3 text-sage" />
                  <span>Follow measurements precisely for best results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recipe;