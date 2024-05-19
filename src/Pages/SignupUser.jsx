import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Input from '../Components/Input'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import CheckInput from '../Components/CheckInput'

const SignupUser = () => {
  return (
    <>
        <Navigation />

        <div className='flex justify-center items-center mt-[40px] p-[20px]'>
            <div>
                <div className='mb-[20px]'>
                    <h3 className='font-bold text-center text-white/[90%] select-none text-[20px] cursor-pointer'>Sign Up</h3>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Welcome to <span className="text-cyan-500">Formi Flick!</span> Please log in to access our full range of movies and exclusive content.<br></br> Thank you for choosing us for your cinematic experience</p></div>
                </div>

                <div className="bg-accentBg h-full pl-[40px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px]">
                    <form action="">
                        <Input />
                        <Input />
                        <Input />
                        <CheckInput />
                        <Button size="lg" className="bg-cyan-500 w-full">Sign Up</Button>
                    </form>
                </div>

                <div className='mb-[20px] mt-[10px]'>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Not a new member <span className="text-cyan-500"><Link to={'/login'}>Login</Link></span></p></div>
                </div>
                
            </div>
        </div>

        <Footer />
    </>
  )
}

export default SignupUser
