import React from 'react'

function SubHeader() {
  return (
    <div className='h-[62px] w-full border-b border-b-1 border-gray-200 content-center ml-2'>
    <div className='grid grid-cols-2'>
      <div className='flex flex-row justify-between list-none ml-20 mr-36'>
        <li className='generalSans font-[600] text-[#DC4A2D] text-[18px] relative shrink-0' >
          Job preview
          <span className='absolute w-12 h-0.5 bg-[#DC4A2D] bottom-[-17px] left-0 right-0 mx-auto'></span>
        </li> 
        <li className='generalSans font-medium text-[#888888] text-[18px] ml-6'>
          Applicants
        </li>
        <li className='generalSans font-medium text-[#888888] text-[18px]  ml-6'>
          Match
        </li>
        <li className='generalSans font-medium text-[#888888] text-[18px]  ml-6'>
          Messages
        </li>

      </div>
    </div>
    </div>
  )
}

export default SubHeader