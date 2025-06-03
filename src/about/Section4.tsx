import React from 'react'

const Section4:React.FC = () => {
  return (
    <div className='px-[113px] bg-[#F5F5F9] pb-[109px]'>
      <h1 className='text-black text-[64px] font-semibold tracking-[-3.84px] leading-[83px] pt-[120px] '>Meet The Team</h1>
      <p className='text-[#828282] text-[18px] leading-[25.5px] font-medium w-[66%] pt-[40px]'>We’re a cross-functional team of product builders, legal professionals, and data scientists united by a single goal: make justice faster, fairer, and more accessible. </p>
      <div className='flex gap-9 pt-[60px]'>
        <div className='p-7 bg-white'>
          <img src="/assets/team1.png" alt="founder image" />
          <h1 className='text-[#111111] leading-6 font-semibold text-[24px] pt-[30px]'>Kouroush Sahmedini</h1>
          <p className='text-[20px] text-[#424242] leading-6 font-medium pt-[13px]'>Founder</p>
        </div>
        <div className='p-7 bg-white'>
          <img src="/assets/team2.png" alt="founder image" />
          <h1 className='text-[#111111] leading-6 font-semibold text-[24px] pt-[30px]'>Sloka Jash</h1>
          <p className='text-[20px] text-[#424242] leading-6 font-medium pt-[13px]'>Product Builder</p>
        </div>
        <div className='p-7 bg-white'>
          <img src="/assets/team3.png" alt="founder image" />
          <h1 className='text-[#111111] leading-6 font-semibold text-[24px] pt-[30px]'>James Micheal</h1>
          <p className='text-[20px] text-[#424242] leading-6 font-medium pt-[13px]'>Attorney Consultant</p>
        </div>
      </div>
    </div>
  )
}

export default Section4