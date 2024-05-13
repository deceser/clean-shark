import React from 'react'

const button = ({title}) => {
  return (
    <a href="#" className=' bg-softblue text-white rounded-md px-4 py-2 text-center border-softblue border-[3px]
    hover:bg-white hover:text-softblue smooth
    '>{title}</a>
  )
}

export default button