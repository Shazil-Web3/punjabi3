import React from 'react';
import Navbar from '@/components/Navbar';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold text-spiceBrown mb-8">Checkout</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg text-sage">Checkout page content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;