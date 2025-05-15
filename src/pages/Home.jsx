import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { datacontext } from "../context/UserContext";
import { MdKeyboardArrowDown, MdOutlinePause } from "react-icons/md";
import { songsData } from "../songs";
import Card from "../components/Card";
import Player from "../components/Player";
import bgmusics from "../assets/musicanim.webp"

const Home = () => {
  let {
    audioRef,
    playingSong,
    playSong,
    pauseSong,
    nextSong,
    index,
    setIndex,
    prevSong,
  } = useContext(datacontext);
  // console.log(audioRef.current.currentTime);
  // console.log(audioRef.current.duration);

  let [range, setRange] = useState(0);
  let progress = useRef(null);
  let [arrow, setArrow]= useState(false)

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);
      if (progress.current) {
        progress.current.style.width = `${progressPercentage}%`;
      }
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
  });

  function handleRange(e) {
    let newrange = e.target.value;
    setRange(newrange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newrange) / 100;
  }

  return (
    <div className="w-full  bg-black text-white flex relative">
      <MdKeyboardArrowDown className="absolute text-white top-[7px] left-[10%] text-[30px] cursor-pointer md:hidden" onClick={()=>setArrow(prev=>!prev)}/>

      {!arrow?<> <div className="w-full md:w-[50%] font-semibold  text-white flex flex-col items-center">
        <div className=" flex flex-col justify-center items-center gap-3 mt-2 md:mt-[120px] fixed">
          <h1 className="text-xl mb-5">Now Playing</h1>
          <div className="w-[250px] h-[250px] rounded-lg relative">
            <img
              src={songsData[index].image}
              alt=""
              className="w-[100%] h-[100%] object-full rounded-lg"
            />
            {playingSong ? (
              <div className="w-[100%] h-[100%] opacity-[0.5] absolute top-0 bg-black flex justify-center items-center">
                <img
                  src={bgmusics}
                  alt=""
                  className="w-[60%] h-[60%] "
                />
              </div>
            ) : null}
          </div>
          <h3 className="text-[30px]">{songsData[index].name}</h3>
          <p>{songsData[index].singer}</p>
          <div className="w-[70%] flex justify-center items-center relative rounded-md">
            <input
              type="range"
              className="appearance-none w-[100%] h-[7px] rounded-md bg-slate-500 cursor-pointer"
              value={range}
              onChange={handleRange}
              style={{
                accentColor: "white",
              }}
            />
            <div
              className={`bg-white h-[7px] absolute left-0 rounded-md`}
              ref={progress}
            ></div>
          </div>
          <div className="flex justify-around items-center text-4xl gap-2">
            <CgPlayTrackPrev
              className="cursor-pointer"
              onClick={() => prevSong()}
            />
            {!playingSong ? (
              <div
                className="bg-white text-black rounded-full text-center cursor-pointer"
                onClick={() => playSong()}
              >
                <IoPlay className="p-2" />
              </div>
            ) : (
              <div
                className="bg-white text-black rounded-full text-center cursor-pointer"
                onClick={() => pauseSong()}
              >
                <MdOutlinePause className="p-2" />
              </div>
            )}

            <CgPlayTrackNext
              className="cursor-pointer"
              onClick={() => nextSong()}
            />
          </div>
        </div>
      </div> <div className=" w-[100%] md:w-[50%] h-full md:flex justify-center items-center hidden flex-col overflow-auto gap-2  mt-[110px]">
        {songsData.map((song) => (
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id - 1}/>
        ))}
      </div></> :<div className=" w-[100%] md:w-[50%] h-full flex justify-center overflow-auto items-center flex-col  gap-2  mt-[30px] mb-[120px]">
        <Player/>
        {songsData.map((song) => (
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id - 1}/>
        ))}
      </div>}
      
      
    </div>
  );
};

export default Home;



