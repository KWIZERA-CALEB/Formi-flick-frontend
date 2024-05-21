import React from 'react'
import { FolderOpenIcon } from '@heroicons/react/24/solid'

const FileChoose = (props) => {
  return (
    <div className='mb-[20px]'>
      <form action="">
          <label htmlFor="choose_file">
                <div className='w-full h-[80px] pl-[15px] pt-[6px] text-white outline-0 border-[2px] border-solid border-[#f9f9f9]/[20%] bg-accentB flex justify-center pt-[20px]'>
                    <div className="flex flex-col">
                        <p className="text-[#fff]/[50%]">{props.input_place}</p>
                        <div className="w-[30px] h-[30px] text-[#fff]/[50%]"><FolderOpenIcon /></div>
                    </div>
                </div>
          </label>
          <input type="file" id={props.id} name={props.name} onChange={props.onChange} className="hidden" />
      </form>
    </div>
  )
}

export default FileChoose
