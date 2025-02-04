import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Clock, ChefHat, Users, Utensils } from 'lucide-react';

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
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <img 
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-5xl font-display font-bold text-cream mb-4">
              {recipe.name}
            </h1>
            <div className="flex items-center space-x-6">
              <span className="text-cream/90 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {recipe.time}
              </span>
              <span className="text-cream/90 flex items-center">
                <ChefHat className="w-5 h-5 mr-2" />
                {recipe.difficulty}
              </span>
              <span className="text-cream/90 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Serves {recipe.servings}
              </span>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display font-bold text-spiceBrown mb-6">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <Utensils className="w-4 h-4 mr-3 text-sage" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-spiceBrown mb-6">
              Instructions
            </h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li 
                  key={index}
                  className="flex"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recipe;