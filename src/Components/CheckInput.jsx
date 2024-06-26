import React from 'react'
import { Checkbox } from '@material-tailwind/react'

const CheckInput = () => {
  return (
    <div className="flex flex-row space-x-[20px] items-center">
        <div className="mb-[20px]">
          <Checkbox id="confirm"/>
        </div>
        <div className='mb-[20px]'>
            <label htmlFor="confirm">
              <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Confirm to agree to our terms</p></div>
            </label>
        </div>
    </div>
  )
}

export default CheckInput
