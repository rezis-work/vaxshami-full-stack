import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";


const SidebarButton = ({onClick}) => {
  return (
    <div>
        <HiMenuAlt1 onClick={onClick} className='text-2xl cursor-pointer'/>
    </div>
  )
}

export default SidebarButton