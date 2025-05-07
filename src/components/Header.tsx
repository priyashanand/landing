

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height to h-20 for more space */}
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Replace with your actual logo */}
            <img
              className="h-10 w-auto" // Adjust height as needed
              src="src/assets/casePilotLogo.png" // Placeholder logo
              alt="CasePilot Logo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop if fallback also fails
                target.src = "https://placehold.co/150x40/cccccc/000000?text=Logo+Error&font=Inter";
                target.alt = "Error loading logo";
              }}
            />
            {/* Or a text placeholder: */}
            {/* <span className="text-2xl font-bold text-purple-700">CasePilot</span> */}
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </a>
            <a href="#how-we-work" className="text-gray-600 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
              How we work
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full text-sm shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-full text-sm border border-purple-200 hover:border-purple-300 shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Login Now
            </button>
          </div>

          {/* Mobile Menu Button (Optional - for responsiveness) */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button p-2 rounded-md text-gray-600 hover:text-purple-700 hover:bg-purple-100">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Hidden by default) - Add JS to toggle */}
      {/*
      <div className="hidden mobile-menu">
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li><a href="#home" className="block text-gray-600 hover:text-purple-700 px-3 py-2 rounded-md text-base font-medium">Home</a></li>
          // ... other links
        </ul>
      </div>
      */}
    </header>
  );
};

export default Header;
