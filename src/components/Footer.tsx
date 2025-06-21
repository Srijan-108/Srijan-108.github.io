import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * Footer component with contact information and links
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-sm">support@ecocharge.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-sm">
                  123 Green Energy Blvd<br />
                  Sustainable City, SC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <div className="text-sm">
                  <p>Mon - Fri: 6:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 7:00 AM - 9:00 PM</p>
                  <p className="text-primary-400 mt-1">24/7 Charging Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>• Fast DC Charging</li>
              <li>• Level 2 AC Charging</li>
              <li>• Tesla Supercharging</li>
              <li>• Mobile App Support</li>
              <li>• 24/7 Customer Service</li>
              <li>• Fleet Management</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">About EcoCharge</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leading the charge towards a sustainable future with reliable, 
              fast, and eco-friendly electric vehicle charging solutions.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>• 100% Renewable Energy</p>
              <p>• Carbon Neutral Operations</p>
              <p>• Community Focused</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 EcoCharge Station. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;