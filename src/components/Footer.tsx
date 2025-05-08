import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center py-20 px-6 md:px-20 gap-16 w-full bg-[#FFFFFF]">
      {/* Content */}
      <div className="flex justify-between gap-12 w-full max-w-[1216px]">
        {/* Logo and description */}
        <div className="flex flex-col items-start gap-6 w-full md:w-1/3">
          <div className="flex flex-row items-center gap-3">
            <img src="/assets/casePilotLogo.png" alt="InjurySync" className="h-6" />
          </div>
          <p className="font-source-sans-pro text-sm leading-[157%] text-[#4C547D]">
            InjurySync is a powerful client intake and case management solution designed to streamline how law firms handle personal injury cases efficiently and securely.
          </p>
          {/* Social media links */}
          
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-12 w-full md:w-2/3 justify-start">
          {/* Quick Links */}
          <div className="flex flex-col gap-4 min-w-[120px]">
            <h6 className="font-montserrat font-medium text-base text-[#4C547D]">Quick Links</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Home</a>
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Custom Solutions</a>
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Our Providers</a>
            </div>
          </div>

          {/* Our Providers */}
          <div className="flex flex-col gap-4 min-w-[120px]">
            <h6 className="font-montserrat font-medium text-base text-[#4C547D]">Our Providers</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Doctors</a>
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Attorneys</a>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="flex flex-col gap-4 min-w-[120px]">
            <h6 className="font-montserrat font-medium text-base text-[#4C547D]">Support & Legal</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Security</a>
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">Privacy Policy</a>
              <a href="#" className="font-source-sans-pro text-base text-[#4C547D] hover:underline">End User Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full max-w-[1216px] pt-8 border-t border-[#ADB3CC] flex justify-center">
        <span className="font-source-sans-pro text-sm text-center text-[#4C547D]">
          © Copyright 2022, All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
