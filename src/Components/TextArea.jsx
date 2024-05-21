import React from 'react'

const TextArea = (props) => {
  return (
    <div className='mb-[20px]'>
      <textarea name={props.name} className="w-full h-[80px] pl-[15px] pt-[6px] text-white outline-0 border-[2px] border-solid border-[#f9f9f9]/[20%] bg-accentBg focus:border-cyan-500" placeholder={props.placeholder} onChange={props.onChange} id=""></textarea>
    </div>
  )
}

export default TextArea
