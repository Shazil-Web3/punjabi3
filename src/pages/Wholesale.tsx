import React from 'react';
import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Building, Package, Users, Clock, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Wholesale = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const products = [
    { 
      name: "Garam Masala",
      description: "A perfect blend of ground spices including cardamom, cinnamon, cloves, and black pepper.",
      image: "/Spices/mount.png",
      price5kg: "45",
      price10kg: "85",
      price25kg: "180",
      bulk: "25kg",
    },
    {
      name: "Turmeric Powder",
      bulk: "25kg",
      price: "$150/box",
      description: "Pure ground turmeric root with intense yellow color and earthy flavor. Known for its anti-inflammatory properties.",
      image: "/Spices/mount.png",
      benefits: ["Anti-inflammatory", "Natural color", "High curcumin content"],
      origin: "Punjab, India"
    },
    {
      name: "Cumin Seeds",
      bulk: "20kg",
      price: "$200/box",
      description: "Whole cumin seeds with intense aroma and slightly bitter, warm flavor. A staple in Indian cuisine.",
      image: "/Spices/mount.png",
      benefits: ["Aids digestion", "Rich in iron", "Natural preservative"],
      origin: "Punjab, India"
    },
    {
      name: "Cardamom Pods",
      bulk: "15kg",
      price: "$350/box",
      description: "Premium green cardamom pods with sweet, intense aroma. Perfect for both savory dishes and desserts.",
      image: "/Spices/mount.png",
      benefits: ["Sweet aroma", "Versatile use", "Premium quality"],
      origin: "Punjab, India"
    },
    {
      name: "Chaat Masala",
      bulk: "25kg",
      price: "$175/box",
      description: "A tangy spice blend featuring black salt, cumin, and amchur. Adds zesty flavor to snacks and street food.",
      image: "/Spices/mount.png",
      benefits: ["Tangy flavor", "Digestive aid", "Versatile blend"],
      origin: "Punjab, India"
    },
    {
      name: "Black Pepper",
      bulk: "20kg",
      price: "$250/box",
      description: "Premium black peppercorns with strong aroma and sharp, woody flavor. Essential for any kitchen.",
      image: "/Spices/mount.png",
      benefits: ["High piperine content", "Natural preservative", "Premium grade"],
      origin: "Punjab, India"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#FABC3F]">
        <div className="absolute inset-0 bg-[url('/Spices/wholesale-hero.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply" />
        <Navbar />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold text-black/80 mb-4">
              Wholesale Partnership
            </h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Premium Punjabi spices for your business at competitive wholesale prices
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-[#E85C0D] relative overflow-hidden">
        {/* Rainbow Glow Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 blur-3xl animate-glow-slow left-0 top-0"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-rose-800 via-amber-500 to-yellow-500 blur-3xl animate-glow-slow-reverse right-0 bottom-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              With over three decades of experience in the spice industry, we provide premium quality 
              Punjabi spices to businesses worldwide.
            </p>
          </div>

          {/* Updated grid styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="w-8 h-8" />,
                title: "Bulk Quantities",
                description: "Available in various bulk packaging options",
                color: "bg-red-100"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assured",
                description: "ISO certified products with quality guarantee",
                color: "bg-amber-100"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Timely Delivery",
                description: "Efficient logistics and on-time delivery",
                color: "bg-emerald-100"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} p-8 rounded-xl text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-spiceBrown shadow-md">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-spiceBrown mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Pricing Section */}
      <section className="py-20 px-4 bg-[#C7253E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white text-center mb-12">
            Our Premium Products
          </h2>
          
          {/* Added relative container for buttons */}
          <div className="relative px-16"> {/* Added padding for button space */}
            {/* Navigation Buttons - Moved outside */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              onClick={handlePrevSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-spiceBrown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              onClick={handleNextSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-spiceBrown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
              {/* Slider Container */}
              <div 
                className="flex h-full transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 flex">
                    {/* Product Info - Left Side */}
                    <div className="w-3/5 p-10 flex flex-col">
                      {/* Product Header */}
                      <div className="mb-8">
                        <h3 className="text-4xl font-display font-bold text-spiceBrown mb-3">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
                      </div>

                      {/* Options Row */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {/* Package Size Dropdown */}
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-2">Package Size</label>
                          <select 
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage bg-white text-sm transition-colors"
                            defaultValue={product.bulk}
                          >
                            <option value="5kg">5kg - ${product.price5kg}</option>
                            <option value="10kg">10kg - ${product.price10kg}</option>
                            <option value="25kg">25kg - ${product.price25kg}</option>
                          </select>
                        </div>
                        
                        {/* Grade Selection Dropdown */}
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-2">Grade</label>
                          <select 
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage bg-white text-sm transition-colors"
                            defaultValue="premium"
                          >
                            <option value="standard">Standard Grade</option>
                            <option value="premium">Premium Grade</option>
                            <option value="organic">Organic Grade</option>
                          </select>
                        </div>

                        {/* Packaging Type Dropdown */}
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-2">Packaging</label>
                          <select 
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage bg-white text-sm transition-colors"
                            defaultValue="box"
                          >
                            <option value="box">Box Package</option>
                            <option value="bag">Bag Package</option>
                            <option value="bulk">Bulk Container</option>
                          </select>
                        </div>
                      </div>

                      {/* Order Button */}
                      <Button className="bg-spiceBrown text-cream hover:bg-opacity-90 w-full py-4 text-lg font-semibold shadow-lg transition-all hover:transform hover:-translate-y-1">
                        Request Quote
                      </Button>
                    </div>
                    
                    {/* Product Image - Right Side */}
                    <div className="w-2/5 relative bg-gray-50 p-6">
                      <div className="h-full w-full rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-spiceBrown w-6' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#821131] relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-black/5 opacity-70"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-display font-bold text-white text-center mb-16">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-spiceBrown mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-spiceBrown mb-2">Warehouse Location</h3>
                  <p className="text-gray-600">123 Spice Street, Industrial Area</p>
                  <p className="text-gray-600">Punjab, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-spiceBrown mb-2">Phone</h3>
                  <p className="text-gray-600">+91 123-456-7890</p>
                  <p className="text-gray-600">+91 987-654-3210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-spiceBrown mb-2">Email</h3>
                  <p className="text-gray-600">wholesale@punjabispices.com</p>
                  <p className="text-gray-600">business@punjabispices.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-spiceBrown mb-6">
                Request Wholesale Pricing
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage bg-white/80"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage bg-white/80"
                />
                <textarea
                  placeholder="Tell us about your business and requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage bg-white/80"
                ></textarea>
                <Button className="w-full bg-spiceBrown text-cream hover:bg-opacity-90 py-6 text-lg">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#821131] text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Punjabi Spices</h3>
            <p className="text-white/80">Premium wholesale spices direct from Punjab</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white/80">Home</Link></li>
              <li><Link to="/products" className="hover:text-white/80">Products</Link></li>
              <li><Link to="/about" className="hover:text-white/80">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white/80">Contact</Link></li>
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
                wholesale@punjabispices.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-white/80">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2024 Punjabi Spices. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Wholesale; 
