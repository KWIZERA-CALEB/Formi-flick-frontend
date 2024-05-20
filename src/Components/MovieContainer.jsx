import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MovieContainer = () => {
  return (
    <div className="rounded-[10px] shadow-md">
        <div className="relative skeleton">
            <Link to={'/movie'}>
              <img src="/images/bannerimg.jpg" className="object-cover rounded-[10px] mb-[3px] select-none cursor-pointer hovered-image" alt="Movieimage" />
            </Link>
            <Link to={'/movie'}>
              <div className="w-[40px] h-[40px] text-cyan-500 absolute top-[20px] left-[20px] cursor-pointer hover:animate-spin hover:w-[42px] hover:h-[42px]"><PlayIcon /></div>
            </Link>
        </div>
        <Link to={'/movie'}>
          <div className="skeleton p-[20px] mt-[10px] bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Black Clover</p></div>
        </Link>
    </div>
  )
}

export default MovieContainer
