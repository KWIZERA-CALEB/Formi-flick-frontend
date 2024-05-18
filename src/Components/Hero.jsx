import React from 'react'
import { Button } from "@material-tailwind/react";



const Hero = () => {
  return (
    <div className='w-full h-[700px] relative'>
      <img src="/images/bannerimg.jpg" className="w-full h-full object-cover" alt="Banner" />
      <div className='absolute left-[20px] top-[120px] flex flex-col flex-start md:left-[70px]'>
            <div><h3 className="text-start font-bold text-[64px] text-white/[80%] cursor-pointer select-none">Let's Make your Day<br></br><span className="text-othersBg">Happy</span></h3></div>
            <div className='mt-[15px]'><p className="text-[#f9f9f9]/[97%] select-none font-[500] leading-[30px] text-[20px]">Dive into Drama, Laugh with Comedy, or Uncover Mystery - Movie Night Starts Here.<br></br>Immerse in Timeless Tales: Your Favorite Stories on the Big Screen. Lose Yourself <br></br>in Laughter, Suspense, or Romance - Movies for Every Mood.</p></div>
            <div className='flex flex-row space-x-[20px] mt-[60px]'>
                <div>
                    <Button size="lg" loading={false} className="bg-cyan-500">Get Started</Button>
                </div>
                <div>
                    <Button className="border-2 border-cyan-500 text-cyan-500 border-solid flex flex-row" size="lg">Explore <div className="w-[20px] h-[20px] rounded-[10px] ml-[3px] pt-[4px] pb-[4px] pr-[4px] pl-[4px] bg-cyan-500 animate-ping"></div></Button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
