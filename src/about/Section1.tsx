const Section1 = () => {
  return (
    <section
      className="py-20 md:py-32 sm:bg-[url(/assets/section1img6.png)] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block bg-[#F3EEFF] text-gray-800 text-xs sm:text-[13px] px-[25.5px] py-[12.5px] text-[#434346] rounded-full mb-6 shadow">
          Personal Injury AI from intake to resolution
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-black mb-4 leading-tight tracking-tighter">
          <span className="relative inline-block">
            Where <span className="text-[#834CFF] font-poppins">AI </span>Meets <span className="text-[#834CFF] font-poppins">Advocacy </span>
          </span>
        </h1>

        {/* Description */}
        <p className="hidden sm:flex max-w-2xl mx-auto text-gray-600 text-[13px] sm:text-lg md:text-[18px] pt-3 sm:pt-10 mb-6 sm:mb-10 leading-relaxed px-3">
          AI-first plaintiff law firm—fast, transparent, and built to help victims get paid sooner and keep more.
        </p>
        <p className="sm:hidden max-w-2xl mx-auto text-gray-600 text-[13px] sm:text-lg md:text-[18px] pt-3 sm:pt-10 mb-6 sm:mb-10 leading-relaxed px-3 pb-6">
        CasePilot automates busywork, captures every opportunity, and simplifies case management for plaintiff-side law firms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row justify-center items-center px-7 sm:px-0 space-x-3 sm:space-x-[16px]">
          <button
            type="button"
            className="bg-[#834CFF] hover:bg-[#6E3EDB] text-white font-medium py-[15px] px-0 sm:px-[27.5px] rounded-full text-[12px] sm:text-[14px]  transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 w-[50%] sm:w-auto"
          >
            Get Started Now
          </button>
          <button
            type="button" 
            className="bg-transparent hover:bg-purple-100 text-[#211738] font-medium py-[15px] px-0 sm:px-[27.5px] rounded-full text-[12px] sm:text-[14px] border border-[#BEA2FF] hover:border-purple-700 transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 w-[50%] sm:w-auto"
          >
            Schedule Call
          </button>
        </div>
        
        
      </div>
      {/* <div className="mt-10">
          <Section2/>
        </div> */}

    </section>
  );
};

export default Section1;
