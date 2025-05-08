const Section5 = () => {
  return (
    <div className="px-40">
      <div className="relative h-[calc(100%-300px)] overflow-hidden rounded-[40px] bg-gradient-to-t from-[#AD88FF] to-[#8955FF]">
        <div className="flex flex-col items-center text-white py-10">
          <div className="text-[40px] font-extrabold pt-3 mb-2">
            The software you wanted, available today
          </div>
          <div className="text-lg">
            Book your demo today and meet the AI agents built to power the modern law firm.
          </div>
        </div>
        <img src="public/assets/section5img1.png" alt="" className="p-20" />

        {/* Optional white bar at the bottom */}
        <div className="bg-white h-[80px] w-full absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default Section5;
