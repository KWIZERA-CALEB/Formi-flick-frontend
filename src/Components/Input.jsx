import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-[20px]'>
      <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="w-full h-[60px] pl-[15px] text-white outline-0 border-[2px] border-solid border-[#f9f9f9]/[20%] bg-accentBg focus:border-cyan-500" placeholder={props.placeholder} />
    </div>
  )
}

export default Input
