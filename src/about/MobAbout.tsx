import React, { useState, useEffect, useRef } from 'react'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Section1 from '../about/Section1'
import Section9 from '../components/Section9'

const team = [
  {
    memName: "Kouroush Sahmedini",
    role: "Founder",
    url: "/assets/team1.png"
  },
  {
    memName: "Sloka Jash",
    role: "Founder",
    url: "/assets/team2.png"
  },
  {
    memName: "James Micheal",
    role: "Founder",
    url: "/assets/team3.png"
  },
]

const trust = [
  {
    url:"/assets/as5i1.png",
    head: "Y Combinator",
    content: "High-volume case submissions nationwide"
  },
  {
    url:"/assets/as5i2.png",
    head: "United Health Group",
    content: "Claims assistance for affiliated clinics"
  },
  {
    url:"/assets/as5i3.png",
    head: "Goldstein LLP",
    content: "AI-powered intake and document automation"
  }
]

const items = [
  { text: 'AI-Powered Intake', img: '/assets/as2i1.png' },
  { text: 'Smart Case Tracking', img: '/assets/as2i2.png' },
  { text: 'Automated Lien Support', img: '/assets/as2i3.png' },
  { text: 'AI-Powered Intake', img: '/assets/as2i1.png' },
  { text: 'Smart Case Tracking', img: '/assets/as2i2.png' },
  { text: 'Automated Lien Support', img: '/assets/as2i3.png' },
];


const MobAbout:React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currIndexTeam, setCurrIndexTeam] = useState(0);
  const [currIndexTrust, setCurrIndexTrust] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 1000);
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

  const handleNext = () => {
    setCurrIndexTeam((prev)=>(prev === team.length-1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrIndexTeam((prev)=>(prev === 0 ? team.length-1 : prev - 1))
  }

  const handleDotClick = (index: number) => {
    setCurrIndexTeam(index);
  };
  const handleDotClickTrust = (index: number) => {
    setCurrIndexTrust(index);
  };
  return (
    <div>
      <Section1/>

      {/* Sction2 */}
      <div>
        <div className=' bg-black'>
          <div className='text-[#A7A7A7] text-[12px] text-center pt-[32px]'>
            Trusted by Top PI Firms and Trial Lawyers 
          </div>
          <div className="flex justify-center items-center h-[112px] sm:px-32">
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
            <div className='flex flex-col justify-between gap-[24px] pt-[20px] pb-[60px] px-[22px]'>
              <div className='flex rounded-[16px] bg-[#2020206B] items-center w-full gap-8 py-[24px] px-[24px]'>
                <div className='text-[#A57CFF] text-[24px] font-semibold'>43 Day <br /> Cycle</div>
                <div className='text-[#818181] text-[11px] '>Faster claims from start <br /> to settlement.</div>
              </div>
              <div className='flex rounded-[16px] bg-[#2020206B]  items-center w-full gap-7 py-[24px] px-[24px]'>
                <div className='text-[#A57CFF] text-[24px]  font-semibold'>90% <br /> PayOut</div>
                <div className='text-[#818181] text-[11px] '>Victims keep more of <br />their compensation.</div>
              </div>
              <div className='flex rounded-[16px] bg-[#2020206B]  items-center w-full gap-[70px] py-[24px] px-[24px]'>
                <div className='text-[#A57CFF] text-[24px] font-semibold'>9.4 <br /> NPS</div>
                <div className='text-[#818181] text-[11px] '>Users love speed, <br /> clarity, and control.</div>
              </div>
            </div>
          </div>        
        </div>
      </div>
      

      {/* Sction3 */}
      <div className='py-[54px] px-[22px] relative'>
      <img src="/assets/as3i1.png" alt="" className="w-full" />
      <img
        src="/assets/casePilotLogo.png"
        alt="Logo"
        className="h-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      </div>
      

      {/* Meet the Team */}
      <div className='bg-[#F5F5F9] px-[22px]'>
        <h1 className='text-black text-[24px] font-semibold tracking-[-0.288px] text-center pt-[48px] pb-[24px]'>Meet The Team</h1>
        <p className='text-[#605F5F] text-[13px] leading-[20.9px] text-center px-[23px] pb-[36px]'>We’re a cross-functional team of product builders, legal professionals, and data scientists united by a single goal: make justice faster, fairer, and more accessible..</p>
        <div>
          <div className='p-5 bg-white rounded-[16px]'> 
            <div>
              <img src={team[currIndexTeam].url} alt="" className=''/>
              <h1 className='text-[#111111] text-[16px] font-semibold leading-5 pt-[24px]'>{team[currIndexTeam].memName}</h1>
              <p className='text-[#424242] text-[14px] leading-5 pb-[10px]'>{team[currIndexTeam].role}</p>
            </div>            
          </div>
          <div className='flex justify-between pt-[24px] pb-[48px]'>
            <button onClick={handlePrev} style={{color:"#929292"}}>
              <CircleArrowLeft/>
            </button>
            <div className='flex gap-2'>{team.map((_, ind)=>(
              <button key={ind} onClick={()=> handleDotClick(ind)}  className={`h-[5px]  rounded-full ${
                    ind === currIndexTeam ? 'bg-[#834CFF] w-[26px]' : 'bg-[#CCB8F8] w-[15px]'
                  }`}>

              </button>
            ))}</div>
            <button onClick={handleNext} style={{color:"#929292"}}>
              <CircleArrowRight/>
            </button>
          </div>
        </div>
      </div>
      

      {/* Secton5 */}
      <div className='bg-[url("/assets/mobbg.png")] bg-cover bg-center w-full flex flex-col items-center py-[66px]'>
        <h1 className='text-[24px] text-white font-semibold leading-[33.6px] text-center'>Trusted by Industry <br /> Leader</h1>
        <img src={trust[currIndexTrust].url} alt="" className='h-[79.5px]'/>
        <h1 className='text-[22px] font-medium pb-[16px] pt-[38.5px] text-white'>{trust[currIndexTrust].head}</h1>
        <p className='text-[13px] text-[#AFAFAF] pb-[37px] px-[105px] text-center'>{trust[currIndexTrust].content}</p>
        
          <div className='flex gap-2'>{team.map((_, ind)=>(
            <button key={ind} onClick={()=> handleDotClickTrust(ind)}  className={`h-[5px]  rounded-full ${
                  ind === currIndexTrust ? 'bg-[#CACACA] w-[26px]' : 'bg-[#B1ADAD5E] w-[15px]'
                }`}>
            </button>
          ))}</div>

      </div>
      <Section9/>

    </div>
  )
}

export default MobAbout