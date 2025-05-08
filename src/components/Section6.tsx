

const Section6 = () => {
  return (
    <div
  className="h-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-white bg-[url(/assets/image.png)] bg-no-repeat bg-cover bg-center py-20"
>
  {/* Left side text */}
  <div className="mb-10 md:mb-0">
    <h2 className="text-4xl md:text-[64px] font-extrabold leading-tight text-center md:text-left px-4 md:pl-16">
      Experience the future of <br />
      <span className="text-[#E7B4FF]">– Legal</span><span className="text-[#A077FD]"> Workflows</span>
    </h2>
  </div>

  {/* Right side text and button */}
  <div className="text-center md:text-left max-w-[37%]">
    <p className="mb-4 text-[18px] md:text-[20px] text-gray-300  md:pr-10">
      Schedule a demo to see how CasePilot AI agents can streamline your workflow.
    </p>
    <button className="px-6 py-2 border border-purple-400 rounded-full text-purple-300 hover:bg-purple-600 hover:text-white transition">
      Book A Demo
    </button>
  </div>
</div>

  );
};

export default Section6;
