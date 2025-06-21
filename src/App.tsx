import React from 'react';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

/**
 * Main App component for EcoCharge Station Registration
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 font-inter">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Join the Electric Revolution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register your electric vehicle today and get access to our network of 
              fast, reliable, and eco-friendly charging stations across the country.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Charging</h3>
              <p className="text-gray-600">
                Get up to 80% charge in under 30 minutes with our high-speed DC chargers.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Green Energy</h3>
              <p className="text-gray-600">
                All our charging stations are powered by renewable energy sources.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Integration</h3>
              <p className="text-gray-600">
                Monitor charging status and payments through our mobile app.
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex justify-center">
            <RegistrationForm />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;