import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const AdminSidebar = () => {
    return (
        <>

            <div className='h-screen sm:flex hidden select-none bg-white top-0 left-0 w-[15rem] flex-col gap-4 fixed overflow-x-hidden z-[100px] overflow-y-auto border-r border-gray-200 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-blue-500 transition-colors duration-300'>

                {/* main sidebar header */}
                <Link href='/' className='w-[15rem] h-[4rem] py-[1rem] px-[1.25rem] z-[9px] flex items-center justify-center border-b border-gray-200'>
                    <h1 className='font-medium text-2xl text-[#0B2445] cursor-pointer'>Vaxshami</h1>
                </Link>

                {/* Main Menu */}
                <div className='flex flex-col gap-8 px-6 py-2 h-full'>

                    <div className='flex flex-col items-start gap-5'>
                        <span className='text-[11.5px] font-semibold text-[#2C364C]'>MAIN</span>
                        <div className='flex items-center gap-4 cursor-pointer group'>
                            <LayoutDashboard className='text-[#5B6E88] text-[10px] group-hover:text-blue-500 transition duration-300' />
                            <Link href='/' className='text-[#5B6E88] text-md group-hover:text-blue-500 transition duration-300'>Index</Link>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AdminSidebar
