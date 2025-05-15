import React from "react";

const FooterLogo: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 max-w-[294px]">
      <div>
        <svg
          width="294"
          height="138"
          viewBox="0 0 294 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[294px] h-[138px]"
        >
          <text
            fill="black"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Poppins"
            fontSize="24"
            fontWeight="600"
            letterSpacing="-1px"
          >
            <tspan x="20" y="26.4">CasePilot</tspan>
          </text>
          <circle cx="4.5" cy="18.5" r="4.5" fill="#5B3CFF"></circle>
          <text
            fill="#505058"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Plus Jakarta Sans"
            fontSize="16"
            fontWeight="500"
            letterSpacing="0px"
          >
            <tspan x="0" y="84.528">Streamline case workflows, eliminate </tspan>
            <tspan x="0" y="108.528">repetitive tasks, and focus more on </tspan>
            <tspan x="0" y="132.528">winning outcomes.</tspan>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default FooterLogo;
