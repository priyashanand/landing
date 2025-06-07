import React from 'react'

const Section5:React.FC= () => {
  return (
    <div className='bg-[url("/assets/bg.png")] bg-cover bg-center flex flex-col items-center py-[120px]'>
      <h1 className='text-[64px] font-semibold text-white leading-[83.2px] tracking-[-3.84px] tracking pb-[84px]'>Trusted by Industry Leaders</h1>
      <div className='flex px-[136px] justify-between w-full'>
        <div className='flex flex-col items-center'>
          <img src="/assets/as5i1.png" alt="" className='h-[157px] w-[157px]'/>
          <h1 className='text-[36px] font-medium leading-[41.7px] text-white pt-[53px]'>Y Combinator</h1>
          <p className='text-[20px] leading-[28.4px] text-[#B9B5B5] text-center pt-[23px]'>High-volume case <br /> submissions nationwide</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/assets/as5i2.png" alt="" className='h-[157px] w-[157px]'/>
          <h1 className='text-[36px] font-medium leading-[41.7px] text-white pt-[53px]'>United Health Group</h1>
          <p className='text-[20px] leading-[28.4px] text-[#B9B5B5] text-center pt-[23px]'>Claims assistance for <br />
affiliated clinics</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/assets/as5i3.png" alt="" className='h-[157px] w-[157px]'/>
          <h1 className='text-[36px] font-medium leading-[41.7px] text-white pt-[53px]'>Goldstein LLP</h1>
          <p className='text-[20px] leading-[28.4px] text-[#B9B5B5] text-center pt-[23px]'>AI-powered intake and <br />
document automation</p>
        </div>

      </div>
    </div>
  )
}

export default Section5