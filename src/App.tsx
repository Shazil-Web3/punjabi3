import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from './contexts/AuthContext';

import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";

import Contact from "./pages/Contact";
import Recipe from './pages/Recipe';
import Recipes from './pages/Recipes';
import Cart from './pages/Cart';
import Wholesale from './pages/Wholesale';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CartProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products" element={<Products />} />
                <Route path="/wholesale" element={<Wholesale />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </Router>
          </AuthProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;