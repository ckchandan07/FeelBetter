import React, { useContext } from "react";
import { songsData } from "../songs";
import { IoPlay, IoPlaySharp } from "react-icons/io5";
import { datacontext } from "../context/UserContext";
import { MdOutlinePause } from "react-icons/md";

const Player = () => {
    let {playingSong , playSong, image , pauseSong}=useContext(datacontext)
  return (
    <div className="w-[100%] md:w-[60%] h-[100px] fixed bg-white bottom-[80px] rounded-t-[30px] md:bottom-0">
      <div className="flex h-[100%] justify-between items-center px-2">
        <div className=" flex h-[100%] justify-start items-center gap-2 py-[3px]">
          <div className="w-[95px] h-[100%] py-1">
            <img
              src="src/assets/image2.jpg"
              alt=""
              className="w-[100%] h-[90%]  rounded-lg"
            />
          </div>
          <div className="text-black ">
            <p className="text-[18px] font-bold">Kesariya</p>
            <p className="text-[15px]">Arjit Singh</p>
          </div>
        </div>
        <div>
          {!playingSong ? (
            <div
              className="bg-black text-white rounded-full text-center cursor-pointer"
              onClick={() => playSong()}
            >
              <IoPlay className="p-2 text-[50px]" />
            </div>
          ) : (
            <div
              className="bg-black text-white rounded-full text-center cursor-pointer"
              onClick={() => pauseSong()}
            >
              <MdOutlinePause className="p-2 text-[50px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
