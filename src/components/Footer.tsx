const Footer = () => {
  return (
    <footer className="sm:hidden bg-white rounded-b-[40px] shadow-sm">
      <div className="mx-auto px-[10px] pt-28 ">
        <div className="flex flex-col lg:flex-row justify-between gap-16 px-5 sm:px-28">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/casePilotLogo.png" alt="" className="h-8 sm:h-10"/>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Streamline case workflows, eliminate repetitive tasks, and focus more on winning outcomes.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex justify-between gap-20 ">
            {/* Quick Links */}
            <div>
              <h3 className="text-black font-semibold text-[16px] mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-600 text-[15px]">
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">How we work</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Providers */}
            <div>
              <h3 className="text-black font-semibold text-[16px] mb-6">Our Providers</h3>
              <ul className="space-y-4 text-gray-600 text-[15px]">
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Attorneys</a></li>
                <li><a href="#">Support & Legal</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-xs">
            <h3 className="text-black font-semibold text-[16px] mb-6">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 border border-gray-300 rounded-xl mb-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7B3EFF]"
            />
            <button className="w-full bg-[#7B3EFF] hover:bg-[#6a30f5] text-white py-3 rounded-xl font-semibold transition">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-200 mt-16 pt-[39px] pb-[31px] text-center">
          <p className="text-sm text-gray-400">
            © Copyright 2025, All Rights Reserved by CasePilot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
