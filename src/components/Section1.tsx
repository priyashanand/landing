const Section1 = () => {
  return (
    <section
      className="py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("public/assets/section1img4.png")' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow">
          Case Management made simpler
        </div>

        {/* Main Headline */}
        <div className="flex justify-center  flex-wrap items-center">
          <img src="public/assets/section1img1.png" alt="icon" className="h-[39px] sm:h-[69px] px-2 sm:px-0" />
          <img src="public/assets/section1img2.png" alt="icon" className="hidden sm:block h-[39px] sm:h-[69px] px-0 sm:px-9" />
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-gray-800 mb-0.5 sm:mb-4 leading-tight">
            <span className="relative inline-block">Legal Teammates</span>
          </h1>
          <img src="public/assets/section1img3.png" alt="icon" className="h-[39px] sm:h-[69px] px-2 sm:px-9" />
          <div className="sm:h-[69px] sm:w-[69px]"></div>
        </div>

        {/* Sub Headline */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-gray-800 mb-4 leading-tight">
          <span className="relative inline-block">
            <span className="text-gray-600">Reimagined</span> now with AI
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 text-[13px] sm:text-lg md:text-[18px] pt-3 sm:pt-10 mb-6 sm:mb-10 leading-relaxed">
          CasePilot provides intelligent automation that removes busywork,
          ensures no opportunity is missed, and streamlines case management — purpose-built for plaintiff-side law firms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row justify-center items-center space-y-0 sm:space-x-6">
          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-[12px] sm:text-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 w-[50%] sm:w-auto"
          >
            Get Started Now
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-purple-100 text-purple-700 font-semibold py-3 px-8 rounded-full text-[12px] sm:text-lg border-2 border-purple-600 hover:border-purple-700 shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 w-[50%] sm:w-auto"
          >
            Book A Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
