import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate= useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        {/* Home and search */}
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer rounded'>
                <img src={assets.home_icon} alt="Home Icon" className='w-8' />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer rounded '>
                <img src={assets.search_icon} alt="Home Icon" className='w-8' />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            {/* Library  */}
            <div className='flex items-center justify-between m-4'>
                <div className="flex item-center gap-3">
                    <img src={assets.stack_icon} className='w-8' alt="stack_icon" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="arrow_icon" />
                    <img className='w-5' src={assets.plus_icon} alt="arrow_icon" />
                </div>
            </div>
            {/* Create playlist */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold pl-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            {/* Browse podcasts  */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold pl-4 mt-4'>
                <h1>Let's find some podcasts to follow</h1>
                <p className='font-light'>We will keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
