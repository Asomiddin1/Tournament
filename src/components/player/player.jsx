import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'

const Player = ({playerName}) => {
  return (
    <div className='border-[1px] border-slate-600 py-2 px-3 rounded flex items-start justify-center gap-2'>
       <FaUserCircle className='mt-1'/> 
       <h1>{playerName}</h1>
       <FaPencil className='mt-1 text-[14px]' />
    </div>  
  )
}

export default Player