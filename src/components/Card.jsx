import React, { useContext } from "react";
import { songsData } from "../songs";
import { CgPlayListAdd } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { datacontext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../Redux/playlistslice";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { AddLike, RemoveLike } from "../Redux/likedslice";

const Card = ({name, image, singer, songIndex}) => {

  let{playSong, index, setIndex}=useContext(datacontext)
  let dispatch=useDispatch()
  let gaana = useSelector(state=>state.playlist)
  const songExistInPlaylist=gaana.some((song)=>song.songIndex===songIndex)
  console.log(songExistInPlaylist)

  let likedSong = useSelector(state=>state.liked)
   const songExistInLiked=likedSong.some((song)=>song.songIndex===songIndex)

  return (
    <div className="w-[90%] h-[80px] md:h-[120px] bg-gray-800 rounded-lg p-[5px] md:p[10px] flex justify-center  hover:bg-gray-600 transition-all">
      <div className="flex justify-start items-center gap-[20px] w-[70%] h-[100%] cursor-pointer" onClick={()=>{
        setIndex(songIndex)
        playSong()
      }}>
        <div className="w-[60px] h-[70px] md:max-h-[100px] md:w-[100px]">
          <img
            src={image}
            alt=""
            className="w-[100%] h-[100%] rounded-lg object-fill"
          />
        </div>
        <div>
          <p className="text-[18px] font-semibold">{name}</p>
          <p className="text-[15px]">{singer}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px] w-[30%] h-[100%] text-white text-2xl">

        {!songExistInPlaylist && (<div onClick={()=>{
          dispatch(AddSong({name:name, image:image, singer:singer, songIndex:songIndex}))
        }}>
          <CgPlayListAdd className="text-[22px] font-semibold cursor-pointer"/>
          
        </div>)}
        {songExistInPlaylist && (<div onClick={()=>{
          dispatch(RemoveSong(songIndex))
        }}>
          <MdOutlinePlaylistRemove className="text-[22px] font-semibold cursor-pointer"/>
        </div>)}
        
        {!songExistInLiked ? (
          <div onClick={() => dispatch(AddLike({ name, image, singer, songIndex }))}>
            <FaRegHeart className="cursor-pointer" />
          </div>
        ) : (
          <div onClick={() => dispatch(RemoveLike(songIndex))}>
            <FcLike className="cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;






