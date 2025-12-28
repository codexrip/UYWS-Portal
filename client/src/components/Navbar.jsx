import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30"> 
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="UYWS Logo" className="h-28 w-28 object-contain rounded-full" />
              
            </Link>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            <Link to="/initiatives" className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium">Initiatives</Link>
            <Link to="/volunteer" className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium">Volunteer</Link>
            <Link to="/donate" className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600">Donate Now</Link>
            <Link to="/login" className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/signup" className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600">Sign Up</Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-green focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50">About Us</Link>
            <Link to="/initiatives" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50">Initiatives</Link>
            <Link to="/volunteer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50">Volunteer</Link>
            <Link to="/donate" className="block w-full text-center mt-4 bg-brand-green text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600">Donate Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
// About Us
// Initiatives
// Events
// Volunteer
// Gallery
// Publications
// Hall of Fame
// Donate
export default Navbar;