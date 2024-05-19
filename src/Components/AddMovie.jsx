import React from 'react'
import Input from '../Components/Input'
import { Button } from "@material-tailwind/react";
import TextArea from '../Components/TextArea';
import FileChoose from './FileChoose';

const AddMovie = () => {
  return (
    <>
        <h3 className='font-bold text-white/[90%] select-none text-[20px] cursor-pointer text-center'>Add Movie</h3>
        <div className="flex justify-center items-center">
            <div className='bg-accentBg rounded-[20px] w-full p-[30px] md:w-[700px]'>
                <form action="">
                    <Input />
                    <Input />
                    <Input />
                    <TextArea />
                    <FileChoose />
                    <FileChoose />
                    <Button size="lg" className="bg-cyan-500 w-full">Add</Button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddMovie
