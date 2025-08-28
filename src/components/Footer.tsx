import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-orange-500">Ecom</span>Root
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming ecommerce businesses through strategic email marketing and data-driven growth.
            </p>
            <Link
              to="/demo-call"
              onClick={scrollToTop}
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
            >
              Book Free Audit
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/demo-call"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email Marketing Strategy</li>
              <li>Automation Flows</li>
              <li>Campaign Management</li>
              <li>List Growth & Segmentation</li>
              <li>Deliverability Optimization</li>
              <li>Performance Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-orange-500" />
                <span>ecomroot8@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-orange-500" />
                <span>My Phone Number</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-orange-500" />
                <span>Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EcomRoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;