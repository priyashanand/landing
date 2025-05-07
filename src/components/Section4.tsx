const Section4 = () => {
  return (
    <div className="bg-[#FAFAFA] pb-20">
      <div className="py-20 px-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-gray-800 mb-4 leading-tight">
          <span className="relative inline-block">Empowering Innovation -</span>
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-gray-800 mb-4 leading-tight">
          <span className="relative flex items-center gap-4">
            <img src="src/assets/section4img2.png" alt="" className="h-[69px]" />
            <img src="src/assets/section4img1.png" alt="" className="h-[69px]" />
            <span className="text-gray-500">Leading</span> Solutions
          </span>
        </h1>
      </div>

      <div className="flex gap-7 px-40">
        {[{
          imgMain: "src/assets/section4img3.png",
          title: "Instant Followup",
          desc: "Effortlessly gather client information with dynamic, real-time forms that adapt to responses for accuracy"
        }, {
          imgMain: "src/assets/section4img4.png",
          title: "Instant Followup",
          desc: "Streamline your intake process with AI, efficiently gathering case details, screen leads, and directing them to your team."
        }, {
          imgMain: "src/assets/section4img5.png",
          title: "Instant Followup",
          desc: "Switch on smart workflows to handle tasks, follow-ups, document requests, and lien coordination—automatically."
        }].map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl w-1/3 flex flex-col justify-between overflow-hidden shadow-md"
          >
            <div className="p-10">
              <img
                src={card.imgMain}
                alt=""
                className="h-auto file:w-full object-contain mx-auto mb-6"
              />
              <img
                src="src/assets/section4img6.png"
                alt=""
                className="h-16 object-contain mb-6 pl-2"
              />

              <div className="text-[28px] font-semibold text-left mb-2">
                {card.title}
              </div>
              <div className="text-[18px] text-left text-gray-700">
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
