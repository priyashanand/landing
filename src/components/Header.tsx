import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePricingClick = () => {
    if (location.pathname === '/') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#pricing'); // For navigation
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to wait for DOM to load
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-8 sm:h-10 w-auto"
                src="/assets/casePilotLogo.png"
                alt="CasePilot Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black px-3 py-2 rounded-md text-sm font-semibold">Home</Link>
            <button onClick={handlePricingClick} className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-black font-medium py-2 px-4 rounded-full text-sm transition">
              Login Now
            </button>
            <Link to="/contact">
              <button className="bg-[#834CFF] hover:bg-[#6E3EDB] text-white font-medium py-2 px-4 rounded-full text-sm shadow-md transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-700 hover:bg-purple-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pt-4 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 text-base font-medium">Home</Link>
          <button
            onClick={() => {
              handlePricingClick();
              setIsMenuOpen(false);
            }}
            className="block text-left w-full text-gray-600 text-base font-medium"
          >
            Pricing
          </button>

          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-[#834CFF] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full text-sm shadow-md transition">
                Contact Us
              </button>
            </Link>
            <button className="bg-purple-100 hover:bg-purple-200 text-[#834CFF] font-medium py-2 px-4 rounded-full text-sm border border-purple-200 hover:border-purple-300 shadow-md transition">
              Login Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
