import React from 'react'

const button = ({title}) => {
  return (
    <a href="#" className='text-center bg-white border-[3px] shadow-lg rounded-md px-4 md:px-8 py-2 border-white smooth hover:border-black'>{title}</a>
  )
}

export default button