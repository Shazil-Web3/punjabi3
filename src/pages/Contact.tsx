import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-display font-bold text-spiceBrown mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-display font-bold text-spiceBrown mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                ></textarea>
              </div>
              <Button className="w-full bg-spiceBrown hover:bg-opacity-90 text-cream">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-beige p-6 rounded-lg">
              <h3 className="font-display font-bold text-xl text-spiceBrown mb-4">Visit Us</h3>
              <p className="text-gray-700">
                123 Spice Street<br />
                Punjab, India<br />
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm
              </p>
            </div>
            <div className="bg-beige p-6 rounded-lg">
              <h3 className="font-display font-bold text-xl text-spiceBrown mb-4">Contact Info</h3>
              <p className="text-gray-700">
                Phone: (123) 456-7890<br />
                Email: info@punjabispices.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;