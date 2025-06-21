import React from 'react';
import { Zap, Leaf } from 'lucide-react';

/**
 * Header component with branding and navigation
 */
const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="relative">
            <Zap className="w-8 h-8 text-accent-400 animate-pulse-slow" />
            <Leaf className="w-4 h-4 text-accent-300 absolute -top-1 -right-1" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-inter">
              Welcome to EcoCharge Station
            </h1>
            <p className="text-primary-100 mt-2 text-sm md:text-base">
              Sustainable charging for a greener tomorrow
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;