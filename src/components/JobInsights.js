import React from 'react'
import { GoPeople } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbUserCheck } from "react-icons/tb";
import { LuPencil } from "react-icons/lu";
import { FiEye, FiMessageSquare } from "react-icons/fi";


function JobInsights() {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between px-2'>
                <button className='w-[172px] h-[42px] ml-4 ml-3 border border-1  bg-[#FEF4F2] border-[#DC4A2D] text-[#DC4A2D] rounded-[8px] flex items-center justify-center text-[14px] lg:text-[15px] generalSans font-semibold'>
                <RiDeleteBin6Line className='mr-2' />
                Delete job
                </button>
                <button className='w-[172px] h-[42px] mr-4 ml-3 border border-2 bg-[#DC4A2D] border-[#FED3CA] text-white rounded-[8px] flex items-center justify-center text-[14px] lg:text-[15px] generalSans '>
                <LuPencil className='mr-2' />
                Edit job
                </button>
            </div>
            <div className='flex flex-col mt-4 px-10 text-[15px]'>
                <div className='flex flex-row py-4 justify-between ' >
                    <div className='flex items-center justify-around'>
                    <GoPeople />
                    <h1 className='mx-2 generalSans font-[500] text-gray-600 '>Applicants</h1>
                    </div>
                    <div className='text-[18px] font-bold text-[#3D3D3D] pr-1'>400</div>
                </div>
                <span className='h-[1px] w-[278px] bg-[#E7E7E7] my-1'></span>
                <div className='flex flex-row py-4 justify-between' >
                    <div className='flex items-center justify-around'>
                    <TbUserCheck />
                    <h1 className='mx-2  generalSans font-[500] text-gray-600'>Matches</h1>
                    </div>
                    <div className='text-[18px] font-bold text-[#3D3D3D] pr-1 '>100</div>
                </div>
                <span className='h-[1px] w-[278px] bg-[#E7E7E7] my-1'></span>
                <div className='flex flex-row py-4 justify-between ' >
                    <div className='flex items-center justify-around'>
                    <FiMessageSquare />
                    <h1 className='mx-2 generalSans font-[500] text-gray-600 '>Messages</h1>
                    </div>
                    <div className='text-[18px] font-bold text-[#3D3D3D] pr-1 '>147</div>
                </div>
                <span className='h-[1px] w-[278px] bg-[#E7E7E7] my-1'></span>
                <div className='flex flex-row py-4 justify-between' >
                    <div className='flex items-center justify-around'>
                    <FiEye />
                    <h1 className='mx-2 generalSans font-[500] text-gray-600'>Views</h1>
                    </div>
                    <div className='text-[18px] font-bold text-[#3D3D3D] pr-1'>800</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobInsights;