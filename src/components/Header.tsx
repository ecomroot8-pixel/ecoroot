import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../components/images/mylogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo (clickable to homepage) */}
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium transition-colors hover:text-orange-500 text-gray-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/demo-call"
            onClick={scrollToTop}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
          >
            Book Free Audit
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors hover:bg-gray-700 text-gray-300"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/demo-call"
                onClick={scrollToTop}
                className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 mt-4"
              >
                Book Free Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
