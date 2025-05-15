import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Player from '../components/Player'
import { IoSearch } from 'react-icons/io5'
import { songsData } from '../songs'



const Search = () => {

  let [input,setInput]=useState("")
  let [newList,setnewList]=useState([])
  useEffect(()=>{
    let a=songsData.filter((song)=>(song.name.toLowerCase().includes(input) || song.singer.toLowerCase().includes(input) || (song.singer.includes(input)) || (song.name.includes(input)) || (song.singer.toUpperCase().includes(input)) || (song.name.toUpperCase().includes(input)) ))
    setnewList(a)
  },[input])

  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col items-center gap-2'>
      <Player/>

      <form action="" className='w-[90%]  md:w-[60%] h-[60px] bg-gray-800 flex justify-center items-center gap-2 rounded-lg md:mt-[90px] mt-[20px] px-2' onSubmit={(e)=>{e.preventDefault()}}>
        <IoSearch className='text-white text-[25px]'/>
        <input type="text"  className='border-0 w-[90%] h-[60px] outline-0' placeholder='Search Song...' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      {input?<div className='w-[100%]  md:h-[100%] flex flex-col justify-start p-[20px] items-center gap-5 overflow-auto mb-[180px] md:mb-[85px]'>
        {newList.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id - 1}/>
        ))}
      </div>:<div className='flex justify-center items-center'><p className='text-3xl text-gray-500'>Search Song</p></div>}

      

    </div>
  )
}

export default Search