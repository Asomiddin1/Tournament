import React from 'react'
import Final from '../final/final'
import CommandLeft from '../commandLeft/commandLeft'
import CommandRight from '../commandRight/commandRight'

const Main = () => {
  return (
    <div className='flex justify-center items-center  h-[85vh] w-full'>
      <CommandLeft />
      <Final />
      <CommandRight />
    </div>
  )
}

export default Main