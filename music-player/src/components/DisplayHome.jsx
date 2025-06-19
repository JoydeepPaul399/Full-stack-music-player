import React, { useRef } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/frontend-assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const DisplayHome = () => {
  const ref=  useRef()
  const ref2= useRef()

  const handleRight= (ref)=>{
    ref.current.scrollLeft+=200
  }

  const handleLeft= (ref)=>{
    ref.current.scrollLeft-=200
  }
  return (
    <>
      <Navbar />
      {/* Album data  */}
      <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='relative'>
              <button onClick={()=>handleLeft(ref)} className='absolute top-[35%] left-3 cursor-pointer'><FaChevronLeft size={28} /></button>
              <div ref={ref} className='flex overflow-auto scroll-smooth'>
                  {
                    albumsData.map((item, index)=>(<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))
                  }
              </div>
              <button onClick={()=>handleRight(ref)} className='absolute top-[35%] right-3 cursor-pointer'><FaChevronRight size={28} /></button>
            </div>
      </div>
        
        {/* songs  */}
      <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hit</h1>
            <div className='relative'>
              <button onClick={()=>handleLeft(ref2)} className='absolute top-[35%] left-3 cursor-pointer'><FaChevronLeft size={28} /></button>
              <div ref={ref2} className='flex overflow-auto scroll-smooth '>
                {
                    songsData.map((item, index)=>(<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                }
            </div>
            <button onClick={()=>handleRight(ref2)} className='absolute top-[35%] right-3 cursor-pointer'><FaChevronRight size={28} /></button>
            </div>
      </div>
    </>
  )
}

export default DisplayHome
