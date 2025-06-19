import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import {albumsData, assets, songsData} from '../assets/frontend-assets/assets'
import logo from '../assets/frontend-assets/spotify_logo.png'

const DisplayAlbum = () => {
    const {id}= useParams()
    // console.log(id)
    const albumData= albumsData[id]
    console.log(albumData)
  return (
    <>
      <Navbar />
      {/* Album  */}
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded ' src={albumData.image} alt="albumImage" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <div className='mt-1 flex gap-1'>
            <img className='w-5' src={logo} alt="spotify_logo" />
            <b>Spotify</b>
            <ul className='flex gap-3  list-none marker:text-white list-inside'>
              <li className='flex gap-[0.5px]'><span>•</span><span>1,323,154 likes</span></li>
              <li className='flex gap-[0.5px] font-semibold'><span>•</span><span>50 Songs</span></li>
              <li className='flex gap-[0.5px]'><span>•</span><span>About 2 hr 30 min</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="clock_icon" />
      </div>
      <hr />
      {
        songsData.map((song, index)=>(
          <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
              <img className='inline w-10 mr-5' src={song.image} alt="songImage" />
              {song.name}
            </p>

            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{song.duration}</p>

          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
