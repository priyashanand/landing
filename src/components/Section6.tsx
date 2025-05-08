

const Section6 = () => {
  return (
    <div
      className="h-[352px] flex items-center justify-between px-20 text-white"
      style={{
        backgroundImage: "url('//assets/section6img1.png')", // adjust path if needed
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundColor: '#000',
      }}
    >
      {/* Left side text */}
      <div>
        <h2 className="text-[64px] font-extrabold leading-tight pl-16">
          Experience the future of <br />
          <span className="text-[#E7B4FF]">– Legal</span><span className='text-[#A077FD]'> Workflows</span>
        </h2>
      </div>

      {/* Right side text and button */}
      <div className="text-left max-w-sm">
        <p className="mb-4 text-[20px] text-gray-300 pb-5 pr-10">
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
