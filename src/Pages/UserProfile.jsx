import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import EditAccAdmin from '../Components/EditAccAdmin'

const UserProfile = () => {
  return (
    <>
        <Navigation  />
        <div className="p-[40px] flex flex-col md:flex-row">
            <div className="bg-accentBg w-full mt-[22px] h-[387.969px] pt-[20px] pl-[40px] pr-[40px] pb-[20px] rounded-[20px] flex flex-col  space-x-[20px] items-center  md:flex-row md:w-[50%]">
                <div>
                    <img src="/images/3d_3.png" className="w-[60px] h-[60px] rounded-[30px] object-cover object-[50% 50%] cursor-pointer outline outline-solid outline-offset-2 outline-cyan-500" alt="Profile" />
                </div>
                <div className="flex flex-col space-y-[-80px]">
                    <div>
                        <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Username: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">Caleb</div></p>
                    </div>
                    <div>
                        <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Joined: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">23rd March 2024</div></p>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[50%]'>
                <EditAccAdmin />
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default UserProfile
