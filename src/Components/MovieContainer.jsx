import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

const MovieContainer = () => {
  return (
    <div className="rounded-[10px]">
        <div className="relative">
            <img src="/images/bannerimg.jpg" className="object-cover rounded-[10px] mb-[3px] select-none cursor-pointer hovered-image" alt="Movieimage" />
            <div className="w-[40px] h-[40px] text-cyan-500 absolute top-[20px] left-[20px] cursor-pointer hover:animate-spin hover:w-[42px] hover:h-[42px]"><PlayIcon /></div>
        </div>
        <div className="p-[20px] bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Black Clover</p></div>
    </div>
  )
}

export default MovieContainer
