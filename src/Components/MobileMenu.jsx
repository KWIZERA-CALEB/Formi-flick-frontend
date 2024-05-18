import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div className="bg-mainBg w-full z-[60px] h-full p-[30px] flex justify-center items-center">
        <div className="flex flex-col space-y-[20px]">
            <Link to={'/'}>
                  <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Home</p></div>
            </Link>
            <Link to={'/movies'}>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Movies</p></div>
            </Link>
            <Link to={'/contact'}>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Contact</p></div>
            </Link>
            <Link to={'/feedback'}>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Feedback</p></div>
            </Link>
            <Link to={'/premium'}>
                <div><p className="text-textLess/[60%] text-[18px] cursor-pointer font-[520] hover:text-othersBg">Premium</p></div>
            </Link>
        </div>
    </div>
  )
}

export default MobileMenu
