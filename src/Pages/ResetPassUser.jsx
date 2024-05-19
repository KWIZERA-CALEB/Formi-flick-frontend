import React from 'react'
import Input from '../Components/Input'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const ResetPassUser = () => {
  return (
    <>
        <Navigation />

        <div className='flex justify-center items-center mt-[40px] p-[20px]'>
            <div className="w-[460px]">
                <div className='mb-[20px]'>
                    <h3 className='font-bold text-center text-white/[90%] select-none text-[20px] cursor-pointer'>Reset Password</h3>
                </div>

                <div className="bg-accentBg h-full pl-[40px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px]">
                    <form action="">
                        <Input />
                        <Button size="lg" className="bg-cyan-500 w-full">Reset Password</Button>
                    </form>
                    <div className='mb-[10px] mt-[10px]'>
                        <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center"><Link to={'/'}>Go Back</Link></p></div>
                    </div>
                </div>
 
            </div>
        </div>

        <Footer />
    </>
  )
}

export default ResetPassUser
