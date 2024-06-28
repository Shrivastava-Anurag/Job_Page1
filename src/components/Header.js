import React, { useState } from 'react'
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { PiHandCoinsLight, PiBellSimpleLight  } from "react-icons/pi";
import { TbChevronDown } from "react-icons/tb";

const Header = () => {
    const [activeButton, setActiveButton] = useState("jobs");
    
    const handleClick = (name) => {
        setActiveButton(name);
    }

  return (
        <div className='flex flex-row justify-between pl-[32px] pr-5 py-[15px] h-[96px] w-full sticky top-0 z-50 bg-white border-b border-b-1 border-gray-200'>
            <div className='w-[100px] h-[61px] bg-[#E7E7E7] my-1 text-center grid content-center'>
                <h1 className='text-[#DC4A2D] font-semibold font-sans text-[20px]'>Logo</h1>
            </div>
            <div className='w-[500px] h-[66px] border border-[#D1D1D1] rounded-full grid content-center py-1 px-2 mb-7 '>
                <ul className='flex flex-row justify-between'>
                    <li className={`w-fit px-4 h-[58px] rounded-[49px] grid content-center text-center mr-12 ${activeButton === 'jobs' ? 'bg-[#DC4A2D] text-white border border-2 border-[#FCB4A5]' : 'text-[#B0B0B0]'}`} onClick={() => handleClick('jobs')}>
                        <div className='flex flex-row justify-self-center'>
                        <FiBriefcase size={25} className='h-full mr-1'/>
                        <h1 className='text-[18px] generalSans font-medium'>Jobs</h1>
                         </div>
                    </li>
                    <li className={`w-full h-[58px] rounded-[49px] grid content-center text-center ${activeButton === 'messages' ? 'bg-[#DC4A2D] text-white   border border-2 border-[#FCB4A5]' : 'text-[#B0B0B0]'}`} onClick={() => handleClick('messages')}>
                        <div className=' flex items-center justify-center'>
                        <div className='relative'>
                        <FiMessageSquare size={25} className='h-full mr-1'/>
                        <span class={`absolute inline-flex rounded-full h-1.5 w-1.5 top-0 right-1 ${activeButton === 'messages' ? 'bg-white' : 'bg-[#DC4A2D]'}`}></span>
                        </div>
                        <h1 className='text-[18px] generalSans font-medium'>Messages</h1>
                         </div>
                    </li>
                    <li className={`w-full h-[58px] rounded-[49px] grid content-center text-center ml-8 ${activeButton === 'payments' ? 'bg-[#DC4A2D] text-white border border-2 border-[#FCB4A5]' : 'text-[#B0B0B0]'}`} onClick={() => handleClick('payments')}>
                        <div className=' flex items-center justify-center'>
                        <PiHandCoinsLight size={25} className='h-full mr-1'/>
                        <h1 className='text-[18px] generalSans font-medium'>Payments</h1>
                         </div>
                    </li>
                </ul>
            </div>
            <div className=' h-[61px] my-1 flex items-center justify-center'>
            <div className='relative'>
            <PiBellSimpleLight size={32}/>
            <span class="absolute inline-flex rounded-full h-1.5 w-1.5 top-1 right-1 bg-[#DC4A2D]"></span>
            </div>
            <div className='flex flex-row mx-2 flex items-center justify-center'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s' className='h-[33px] rounded-full mx-1'></img>
            <TbChevronDown size={20} className=''/>
            </div>
            </div>
        </div>
  )
}

export default Header

