import { useState, useEffect, useRef } from 'react';

const items = [
  { text: 'AI-Powered Intake', img: '/assets/as2i1.png' },
  { text: 'Smart Case Tracking', img: '/assets/as2i2.png' },
  { text: 'Automated Lien Support', img: '/assets/as2i3.png' },
  { text: 'Automated Lien Support', img: '/assets/as2i4.png' },
];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Set card container height to match image height
  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current && cardContainerRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        cardContainerRef.current.style.height = `${imageHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div>
      <div className=' bg-black'>
        <div className="flex justify-between items-center h-[112px] sm:px-32">
          <div className='text-white text-[24px]'>
            Trusted by Top PI Firms and Trial Lawyers 
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center transition-opacity duration-700 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                ${index === currentIndex ? 'flex' : 'hidden'}
                sm:flex sm:opacity-100 sm:py-10 gap-3
              `}
            >
              <img src={item.img} alt="" className="h-[52px]" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className=''>
          {/* LEFT: Stats */}
     
          <div className='flex justify-between gap-[70px] pt-[80px] pb-[60px] px-[113px]'>
            <div className='flex flex-col rounded-[50px] bg-[#2020206B] justify-center items-center w-full gap-4 py-[55px] px-[36px]'>
              <div className='text-[#A57CFF] text-[46px] text-center font-semibold'>43 Day Cycle</div>
              <div className='text-[#818181] text-[16px] text-center'>Faster claims from start to settlement.</div>
            </div>
            <div className='flex flex-col rounded-[50px] bg-[#2020206B] justify-center items-center w-full gap-4 p-12'>
              <div className='text-[#A57CFF] text-[46px] text-center font-semibold'>90% Payout</div>
              <div className='text-[#818181] text-[16px] text-center'>Victims keep more of their compensation.</div>
            </div>
            <div className='flex flex-col rounded-[50px] bg-[#2020206B] justify-center items-center w-full gap-4 p-12'>
              <div className='text-[#A57CFF] text-[46px] text-center font-semibold'>9.4 NPS</div>
              <div className='text-[#818181] text-[16px] text-center'>Users love speed, clarity, and control.</div>
            </div>
          
          </div>
          

        </div>



        
      </div>
    </div>
  );
};

export default Section2;
