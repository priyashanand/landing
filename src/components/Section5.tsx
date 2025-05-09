const Section5 = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 pb-10">
      <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] bg-gradient-to-t from-[#AD88FF] to-[#8955FF]">
        <div className="flex flex-col items-center text-white py-10 px-4 md:px-10 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-3 mb-4 mt-10 leading-snug">
            The software you wanted, available today
          </div>
          <div className="text-sm sm:text-base md:text-lg text-[#DFDFDF] mb-6">
            Book your demo today and meet the AI agents built to power the modern law firm.
          </div>
        </div>

        <img
          src="/assets/section5img1.png"
          alt=""
          className="w-full h-auto px-6 sm:px-16 md:px-20 lg:px-32"
        />

        {/* Optional white bar at the bottom */}
        <div className="bg-white h-[60px] md:h-[80px] w-full absolute bottom-0 left-0" />
      </div>
    </div>
  );
};

export default Section5;
