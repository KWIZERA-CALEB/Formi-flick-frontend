import React from 'react'
import Input from '../Components/Input'
import { Button } from "@material-tailwind/react";

const EditAccAdmin = () => {
  return (
    <div>
      <div className='mb-[25px]'>
        <h3 className='font-bold text-white/[90%] select-none text-[20px] cursor-pointer text-center'>Edit Account</h3>
        <form action="">
            <div className="w-full p-[10px]">
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Old password"/>
                <Input type="password" placeholder="New password"/>
                <Input type="password" placeholder="Confirm password"/>
                <Button size="lg" className="bg-cyan-500 w-full">Change</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default EditAccAdmin
