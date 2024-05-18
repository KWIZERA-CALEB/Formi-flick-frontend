import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navigation = () => {
  return (
    <div className='bg-mainBg select-none h-[80px] nav fixed top-0 left-0 right-0 shadow-md w-full pt-[15px] pb-[15px] pr-[20px] pl-[20px] flex flex-row justify-between items-center md:pl-[40px] md:pr-[40px]'>
        <div className="select-none">
            <h3 className="text-textMain font-Montserrat font-bold text-[20px] cursor-pointer hidden md:block"><span className="bg-othersBg p-[10px] rounded-[6px] text-textMain">Formi</span> Flick</h3>
            <h3 className="text-textMain font-Montserrat font-bold text-[20px] cursor-pointer bg-othersBg pl-[15px] pt-[10px] pb-[10px] pr-[15px] rounded-[6px] block md:hidden">Ff</h3>
        </div>
        <div className='flex flex-row space-x-[35px] items-center hidden md:flex'>
            <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Home</p></div>
            <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Movies</p></div>
            <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Contact</p></div>
            <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Feedback</p></div>
            <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Premium</p></div>
        </div>
        <div className="flex flex-row space-x-[30px] items-center">
            <div className="bg-MainBg w-[40px] h-[40px] p-[12px] rounded-full shadow-md cursor-pointer flex justify-center items-center text-[16px] text-textLess/[60%] bg-accentBg  hover:bg-accentBg hover:text-textLess/[100%]"><MagnifyingGlassIcon /></div>
            <div className="bg-MainBg w-[40px] h-[40px] p-[12px] rounded-full shadow-md cursor-pointer flex justify-center items-center text-[16px] text-textLess/[60%] bg-accentBg  hover:bg-accentBg hover:text-textLess/[100%]"><UserIcon /></div>
            <div className="bg-MainBg w-[40px] h-[40px] p-[12px] rounded-full shadow-md cursor-pointer flex justify-center items-center text-[16px] text-textLess/[60%] bg-accentBg  hover:bg-accentBg hover:text-textLess/[100%] flex md:hidden"><Bars3Icon /></div>
        </div>
    </div>
  )
}

export default Navigation
