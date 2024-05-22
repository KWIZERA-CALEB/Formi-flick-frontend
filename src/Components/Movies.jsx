import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import MovieContainer from './MovieContainer'




const Movies = () => {
  return (
    <div className='mt-[60px] p-[30px]'>
      <div className='mb-[20px]'>
        <h3 className='font-bold text-white/[90%] select-none text-[20px] cursor-pointer flex flex-row items-center space-x-[30px]'>Top This Week <div className="w-[20px] ml-[20px] h-[20px] text-cyan-500 cursor-pointer"><ArrowRightCircleIcon /></div></h3>
      </div>
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-4">
            <MovieContainer />
      </div>

      <div className="rounded-[10px] text-[#fff]/[90%] flex justify-center mt-[20px] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>View More <div className="w-[20px] ml-[20px] h-[20px] text-cyan-500 cursor-pointer"><ArrowRightCircleIcon /></div></p></div>

    </div>
  )
}

export default Movies
