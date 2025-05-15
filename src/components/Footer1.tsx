import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";

const Footer1: React.FC = () => {
  const quickLinks = ["About", "Pricing", "How we work", "Contact Us"];
  const providerLinks = ["Doctors", "Attorneys", "Support & Legal", "Privacy Policy"];

  return (
    <footer className=" hidden sm:flex sm:flex-col px-28 pt-28 pb-16 w-full bg-white max-md:px-16 max-md:pt-16 max-md:pb-10 max-sm:px-5 max-sm:pt-10 max-sm:pb-8">
      <div className="flex flex-wrap gap-20 justify-between max-md:gap-16 max-sm:gap-10">
        <FooterLogo />

        <FooterLinks
          title="Quick Links"
          links={quickLinks}
        />

        <FooterLinks
          title="Our Providers"
          links={providerLinks}
        />

        <FooterNewsletter />
      </div>
    </footer>
  );
};

export default Footer1;
