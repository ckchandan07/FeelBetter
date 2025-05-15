import React from 'react'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Liked = () => {
  let songs=useSelector(state=>state.liked)
  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-start pt-[20px] md:pt[100px] items-center gap-[30px]'>
      <Player/> 
      {!songs.length<1?<><h1 className='text-white font-semibold text-[20px]'>PlayList</h1>
      <div className='w-full h-[65%] md:h-[100%] flex flex-col justify-start items-center gap-[20px] overflow-auto'>
        {songs.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex}/>
        ))}
      </div></>:<div className='text-3xl text-gray-500 mt-50'><h2>No Like Songs </h2></div>}
      
    </div>
  )
}

export default Liked