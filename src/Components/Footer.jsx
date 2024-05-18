import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='w-full h-[100%] p-[40px] pt-[30px] select-none'>
      <div className='w-full h-full bg-accentBg text-white pt-[30px] rounded-[10px] p-[10px] relative'>
        <div className="w-full h-[40px] flex items-center justify-center text-white/[80%] hover:text-white/[100%] tracking-wider absolute bottom-[10px]">Made with <div className='w-[20px] h-[20px] text-red-500'><HeartIcon /></div> By <a href="https://kwizeracaleb.vercel.app" className="text-cyan-500 cursor-pointer">Caleb</a></div>
        {/* footer items */}
        <div className="grid grid-cols-1 mb-[50px] gap-[10px] md:grid-cols-4">
            <div className="flex justify-center">
                <div className="w-[60px] h-[60px]">
                    <h3 className="text-textMain font-Montserrat font-bold text-[20px] cursor-pointer bg-othersBg pl-[15px] pt-[10px] pb-[10px] pr-[15px] rounded-[6px]">Ff</h3>
                </div>
                <div>
                    <h3 className="text-textMain text-center font-Montserrat font-bold text-[20px] cursor-pointer pl-[15px] pt-[10px] pb-[10px] pr-[15px] rounded-[6px]">Formi Flick</h3>
                </div>
            </div>

            <div>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520]">Social Media</p></div>
                <div className="flex flex-col mt-[12px] space-y-[10px]">
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Instagram</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Facebook</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>LinkedIn</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Github</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Mail</p></div>
                </div>
            </div>

            <div>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520]">Most Liked</p></div>
                <div className="flex flex-col mt-[12px] space-y-[10px]">
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Godfather</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Dark Knight</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>12 Angry Men</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Schindler's List</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Shawshank Redemption</p></div>
                </div>
            </div>

            <div>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520]">Special Thanks</p></div>
                <div className="flex flex-col mt-[12px] space-y-[10px]">
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Agasobanuye</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Mofix</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Netflix</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Render</p></div>
                    <div className="bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>Vercel</p></div>
                </div>
            </div>

        </div>
        {/* footer items */}
      </div>
    </div>
  )
}

export default Footer
