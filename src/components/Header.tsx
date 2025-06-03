import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingInView, setIsPricingInView] = useState(false);
  // const [isAboutInView, setIsAboutInView] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track pricing section visibility
  useEffect(() => {
    const pricingSection = document.getElementById('pricing');
    if (!pricingSection) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsPricingInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observerRef.current.observe(pricingSection);

    return () => {
      if (observerRef.current && pricingSection) {
        observerRef.current.unobserve(pricingSection);
      }
    };
  }, [location.pathname]);

  const handlePricingClick = () => {
    if (location.pathname === '/') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#pricing');
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

    const handleAboutClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };
  
  const isAboutActive = location.pathname === '/about';
  const isHomeActive = !(isPricingInView || isAboutActive);
  const isPricingActive = isPricingInView;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[84px]">
          
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
            <button
              onClick={handleHomeClick}
              className={`px-3 py-2 rounded-md text-sm ${
                isHomeActive ? 'text-black font-semibold' : 'text-gray-600 font-medium'
              }`}
            >
              Home
            </button>
            <Link to="/about">
              <button
                onClick={handleAboutClick}
                className={`px-3 py-2 rounded-md text-sm ${
                  isAboutActive ? 'text-black font-semibold' : 'text-gray-600 font-medium'
                }`}
              >
                About
              </button>
            </Link>
            <button
              onClick={handlePricingClick}
              className={`px-3 py-2 rounded-md text-sm ${
                isPricingActive ? 'text-black font-semibold' : 'text-gray-600 font-medium'
              }`}
            >
              Pricing
            </button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-black font-medium py-2 px-4 rounded-full text-sm transition">
              Login Now
            </button>
            <Link to="/contact">
              <button className="bg-[#834CFF] hover:bg-[#6E3EDB] text-white font-medium py-[10px] px-[20px] rounded-full text-sm shadow-md transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-700 hover:bg-purple-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pt-4 pb-6 space-y-4 w-full">
          <button
            onClick={() => {
              handleHomeClick();
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left text-base ${
              isHomeActive ? 'text-black font-semibold' : 'text-gray-600 font-medium'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              handlePricingClick();
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left text-base ${
              isPricingActive ? 'text-black font-semibold' : 'text-gray-600 font-medium'
            }`}
          >
            Pricing
          </button>

          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-[#834CFF] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full w-full text-sm shadow-md transition">
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
