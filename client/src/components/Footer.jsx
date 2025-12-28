import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'; // Make sure to install lucide-react if not already

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="UYWS Logo" 
                className="h-12 w-12 object-contain rounded-full bg-white p-0.5" 
              />
              <div>
                <span className="block text-xl font-bold tracking-wide">UYWS</span>
                <span className="block text-xs text-gray-400">United Youth for Welfare</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">
              "United Today For A Better World Tomorrow"
            </p>
          </div>

          {/* Column 2: Quick Links (Vertical) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/initiatives" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Initiatives</Link></li>
              <li><Link to="/volunteer" className="hover:text-white hover:translate-x-1 transition-all inline-block">Become a Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Community & Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Join Our Community</h3>
            <p className="text-sm text-gray-400 mb-4">Follow us on social media for updates and stories.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-green hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-green hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-green hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-green hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get the latest news and impact reports.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green text-sm"
              />
              <button className="bg-brand-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center gap-2 text-sm font-medium">
                <Send className="h-4 w-4" /> Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} UYWS NGO. All rights reserved. | <Link to="/admin" className="hover:text-gray-400">Admin Login</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;