import { useContext } from 'react'
import './App.css'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
// import { PlayerContext } from '../context/playerContext'
import { PlayerContext } from './context/playerContext'

function App() {
  const {audioRef, track}= useContext(PlayerContext)

  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio> {/* The browser will load the whole your-audio-file.mp3 when the page loads. this is invisible in ui. If we add controls attribute then it works */} 
      </div>
    </>
  )
}

export default App
