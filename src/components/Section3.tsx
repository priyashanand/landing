

const Section3 = () => {
  return (
    <div className='bg-[#FAFAFA] pb-28 pt-10 '>
      <div className="sm:hidden flex flex-col items-center justify-center  py-12">
        <div className=" flex flex-col items-center">
          <h1 className="text-[24px] sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-black mb-1 leading-tight tracking-tighter">            
            <span className="relative inline-block">
              Everything you hated
            </span>
          </h1>
          <h1 className="text-[24px] sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-black mb-1 leading-tight tracking-tighter">            
            <span className="relative inline-block">
              about <span className='text-gray-500'>Case Management </span>
            </span>
          </h1>
          <h1 className="text-[24px] sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#834CFF] leading-tight tracking-tighter">            
            <span className="relative inline-block">
              - Solved
            </span>
          </h1>
        </div>
        <div className="p-16">
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute w-36 h-36 rounded-full animate-pulseRing1 bg-purple-100"></div>

            {/* Middle Ring */}
            <div className="absolute w-32 h-32 rounded-full animate-pulseRing2 bg-purple-200"></div>

            {/* Inner Ring */}
            {/* <div className="absolute w-32 h-32 rounded-full animate-pulse-ring3 bg-purple-300"></div> */}

            {/* Center Circle with Image */}
            <div className="z-20 w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center">
              <img src="/assets/section1img3.png" alt="Icon" className="w-24 h-24" />
            </div>
          </div>
        </div>
        <div className=" px-5">
          <div className=' w-full bg-[#FFFFFF] rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img1.png" alt="" className='h-10 px-5'/>
              <p className='text-[#05011F] font-semibold text-[16px]'>Doctor Protals</p>
            </div>
            <div className='text-[13px] px-5'>No more email chains—notify, negotiate, and sign with providers all in one place.</div>
          </div>
        </div>
        <div className=" px-5">
          <div className=' w-full bg-[#FFFFFF] rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img2.png" alt="" className='h-10 px-5'/>
              <p className='text-[#05011F] font-semibold text-[16px]'>Smart Task Automation</p>
            </div>
            <div className='text-[13px] px-5'>CasePilot automates tasks, follow-ups, and document collection—no manual work.</div>
          </div>
        </div>
        <div className=" px-5">
          <div className=' w-full bg-[#FFFFFF] rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img3.png" alt="" className='h-10 px-5'/>
              <p className='text-[#05011F] font-semibold text-[16px]'>Automated Lien</p>
            </div>
            <div className='text-[13px] px-5'>Connect clients to LOP doctors, manage records, and negotiate liens—hassle-free.</div>
          </div>
        </div>
        <div className=" px-5">
          <div className=' w-full bg-[#FFFFFF] rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img4.png" alt="" className='h-10 px-5'/>
              <p className='text-[#05011F] font-semibold text-[16px]'>Smart Task Automation</p>
            </div>
            <div className='text-[13px] px-5'>Connect CasePilot with Filevine, Clio, or any CRM to keep data synced and current.</div>
          </div>
        </div>
      </div>
      
      
      

      <div className='hidden sm:flex sm:flex-col py-20 px-32'>
        <h1 className="text-[80px] font-semibold text-black mb-4 leading-tight tracking-tighter">            
          <span className="relative inline-block">
            Everything you hated about
          </span>
        </h1>
        <h1 className="text-[24px] sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#834CFF] mb-4 leading-tight tracking-tighter">            
          <span className="relative inline-block">
            <span className='text-gray-500'>Case Management -</span> solved
          </span>
        </h1>
      </div>
      <div className="hidden sm:flex sm:flex-col" >
        {/* className="bg-[url(/assets/section3img5.png)] bg-contain bg-center" */}
        {/* <img src="/assets/section3img5.png" alt="" className="absolute z-20"/> */}
        <div className='flex justify-between px-32'>
          <div className=' w-[1000px] bg-[#FFFFFF] border rounded-3xl p-8'>
            <div className='flex items-center pb-3 '>
              <img src="/assets/section3img1.png" alt="" className='h-20 px-5 py-3'/>
              <p className='text-[#05011F] font-semibold text-[24px]'>Doctor Protals</p>
            </div>
            <div className='px-5'>No more email chains—notify, negotiate, and sign with providers all in one place.</div>
          </div>
          <div className="flex items-end w-full gap-32">
            <div className="w-[50%] h-[50%] bg-[url(/assets/section3img6.png)] bg-cover"></div>
            <div className="w-[50%] h-[50%] bg-[url(/assets/section3img7.png)] bg-cover"></div>
          </div>
          <div className=' w-[1000px] bg-[#FFFFFF] border rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img2.png" alt="" className='h-20  px-5 py-3'/>
              <p className='text-[#05011F] font-semibold text-[24px]'>Smart Automation</p>
            </div>
            <div className='px-5'>CasePilot automates tasks, follow-ups, and document collection.</div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute w-64 h-64 rounded-full animate-pulseRing1 bg-purple-100"></div>

          {/* Middle Ring */}
          <div className="absolute w-48 h-48 rounded-full animate-pulseRing2 bg-purple-200"></div>

          {/* Inner Ring */}
          {/* <div className="absolute w-32 h-32 rounded-full animate-pulse-ring3 bg-purple-300"></div> */}

          {/* Center Circle with Image */}
          <div className="z-10 w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center">
            <img src="/assets/section1img3.png" alt="Icon" className="w-32 h-32" />
          </div>
        </div>


        <div className='flex justify-between px-32'>
          <div className='w-[1000px] bg-[#FFFFFF] border rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img3.png" alt="" className='h-20 px-5 py-3'/>
              <p className='text-[#05011F] font-semibold  text-[24px]'>Automated Lien</p>
            </div>
            <div className='px-5'>Connect clients to LOP doctors, manage records, and negotiate liens—hassle-free.</div>
          </div>
          <div className="flex items-start w-full h-auto gap-32">
            <div className="w-[50%] h-[50%] bg-[url('/assets/section3img8.png')] bg-cover bg-bottom bg-no-repeat"></div>
            <div className="w-[50%] h-[50%] bg-[url('/assets/section3img9.png')] bg-cover bg-bottom bg-no-repeat"></div>
          </div>

          <div className='w-[1000px] bg-[#FFFFFF] border rounded-3xl p-8'>
            <div className='flex items-center pb-3'>
              <img src="/assets/section3img4.png" alt="" className='h-20 px-5 py-3'/>
              <p className='text-[#05011F] font-semibold  text-[24px]'>CRM Integration</p>
            </div>
            <div className='px-5'>Connect CasePilot with Filevine, Clio, or any CRM to keep data synced and current.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3