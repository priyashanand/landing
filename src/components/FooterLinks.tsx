import React from "react";
import { Link } from "react-router-dom";

interface qLinkProps {
  name : string,
  li : string
}

interface FooterLinksProps {
  title: string;
  links: qLinkProps[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <nav className="flex flex-col gap-12 max-sm:w-full">
      <h2 className="text-base font-semibold leading-6 text-neutral-950">
        {title}
      </h2>
      <ul className="flex flex-col gap-6 text-base leading-6 text-neutral-700">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.li} className="hover:text-violet-500 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
