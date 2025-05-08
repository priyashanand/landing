const Footer = () => {
  return (
    <footer className="bg-white py-20 px-6 md:px-20 text-sm text-gray-600">
      <div className="flex flex-col px-64 md:flex-row justify-between gap-10 md:gap-0">
        {/* Logo and description */}
        <div className="flex-1">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-auto"
              src="assets/casePilotLogo.png"
              alt="CasePilot Logo"
            />
          </div>
          <p className="max-w-xs text-[16px] pt-5">
            Streamline case workflows, eliminate repetitive tasks, and focus more on winning outcomes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-24 justify-between ">
          <div>
            <h3 className="text-black text-[16px] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-[16px]">About</a></li>
              <li><a href="#" className="text-[16px]">Pricing</a></li>
              <li><a href="#" className="text-[16px]">How we work</a></li>
              <li><a href="#" className="text-[16px]">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Providers */}
          <div>
            <h3 className="text-black text-[16px] font-semibold mb-6">Our Providers</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-[16px]">Doctors</a></li>
              <li><a href="#" className="text-[16px]">Attorneys</a></li>
              <li><a href="#" className="text-[16px]">Support & Legal</a></li>
              <li><a href="#" className="text-[16px]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <h3 className="text-black font-semibold text-[16px] mb-6">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded mb-6"
            />
            <button className="w-full bg-[#7B3EFF] text-white py-2 rounded hover:bg-purple-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className=" flex items-center justify-center w-full">
        <div className=" text-center mt-10 text-gray-400 text-[14px] border-t w-full pt-8">
          © Copyright 2025, All Rights Reserved by CasePilot
        </div>
      </div>
    </footer>
  );
};

export default Footer;
