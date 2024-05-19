import React from 'react'
import Input from '../Components/Input'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const LoginAdmin = () => {
  return (
    <>
        <Navigation />

        <div className='flex justify-center items-center mt-[40px] p-[20px]'>
            <div className="w-[460px]">
                <div className='mb-[20px]'>
                    <h3 className='font-bold text-center text-white/[90%] select-none text-[20px] cursor-pointer'>Login Admins</h3>
                    <div className="rounded-[10px] text-red-500/[70%] cursor-pointer select-none"><p className="text-center">Login Here requires to be an admin</p></div>
                </div>

                <div className="bg-accentBg h-full pl-[40px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px]">
                    <form action="">
                        <Input />
                        <Input />
                        <Button size="lg" className="bg-cyan-500 w-full">Login</Button>
                    </form>
                </div>
 
            </div>
        </div>

        <Footer />
    </>
  )
}

export default LoginAdmin
