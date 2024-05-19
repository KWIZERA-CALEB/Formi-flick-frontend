import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Movies from '../Components/Movies'
import { Button } from "@material-tailwind/react";

const SingleMovie = () => {
  return (
    <>
        <Navigation />
        <div>
            <div className='mb-[20px] p-[40px]'>
                <h3 className='font-bold text-white/[90%] select-none text-[20px] uppercase cursor-pointer flex flex-row items-center space-x-[30px]'><span className="text-cyan-500">Title</span> : THE BLACK CLOVER</h3>
            </div>
            <div className="w-full pr-[40px] pl-[40px] flex flex-col md:flex-row">
                <div className="w-full md:w-[70%]">
                    <video src="/videos/cobel1.mp4" className="w-full" controls></video>
                </div>
                <div class="w-[100%] select-none md:w-[30%]">
                    <div className="p-[20px] bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Black Clover</p></div>
                    <div className="w-full p-[4px] border-left">
                        <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none"><p>Special Thanks to various parties. Unfortunately, there's no sample text provided for a movie description</p></div>
                    </div>
                    {/* movie details */}
                    <div className='flex flex-col space-y-[-60px]'>
                        <div className='mt-[10px]'>
                            <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Country: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">Rwanda</div></p>
                        </div>
                        <div>
                            <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Genre: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">Horror, Fantasy</div></p>
                        </div>
                        <div>
                            <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Released: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">2024-03-16</div></p>
                        </div>
                        <div>
                            <p className='p-[20px] rounded-[10px] text-[#fff]/[60%] cursor-pointer select-none cursor-pointer flex flex-row items-center space-x-[30px]'>Production: <div className="p-[20px] rounded-[10px] text-[#fff]/[90%] cursor-pointer select-none cursor-pointer">The Clover Productions</div></p>
                        </div>
                    </div>
                    
                    {/* movie details */}

                    <div className="w-full h-[80px] bg-mainBg p-[0px] relative">
                        <div className="shadow-md w-full absolute top-0 left-0 right-0 pl-[10px] pb-[10px] pt-[10px] text-white/[40%] bg-accentBg">Comments</div>
                        <div className="overflow-y-scroll h-[180px]">
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Nice</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Awesome</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">HHH</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Wonderful!</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Nice</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Awesome</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">HHH</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Wonderful!</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Nice</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Awesome</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">HHH</div>
                            <div className="w-full pl-[10px] pb-[10px] pt-[10px] bg-accentBg text-white/[80%]">Wonderful!</div>
                        </div>
                        <Button size="lg" className="w-full mt-[2px]">Leave comment</Button>
                    </div>
                </div>

            </div>

            

            <div className='mb-[8px] mt-[30px] p-[40px]'>
                <h3 className='bg-accentBg font-bold text-white/[30%] p-[10px] select-none text-[20px] uppercase cursor-pointer flex flex-row items-center space-x-[30px]'>You May Also Like</h3>
                <div>
                    <Movies />
                </div>
            </div>
            
        </div>
        <Footer />
    </>
  )
}

export default SingleMovie
