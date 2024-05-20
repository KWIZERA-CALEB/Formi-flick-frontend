import React from 'react'
import Input from '../Components/Input'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


const LoginUser = () => {
  return (
    <>
        <Navigation />

        <div className='flex justify-center items-center mt-[40px] p-[20px]'>
            <div>
                <div className='mb-[20px]'>
                    <h3 className='font-bold text-center text-white/[90%] select-none text-[20px] cursor-pointer'>Login</h3>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Welcome to <span className="text-cyan-500">Formi Flick!</span> Please log in to access our full range of movies and exclusive content.<br></br> Thank you for choosing us for your cinematic experience</p></div>
                </div>

                <div className="bg-accentBg h-full pl-[40px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px]">
                    <form action="">
                        <Input />
                        <Input />
                        <Button size="lg" className="bg-cyan-500 w-full">Login</Button>
                    </form>
                    <div className='mb-[10px] mt-[10px]'>
                        <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Forgot password ? <span className="text-red-500"><Link to={'/resetpass'}>Reset</Link></span></p></div>
                    </div>
                </div>

                <div className='mb-[20px] mt-[10px]'>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">A new member <span className="text-cyan-500"><Link to={'/signup'}>Sign Up</Link></span></p></div>
                </div>
                
            </div>
        </div>

        <Footer />
    </>
  )
}

export default LoginUser
