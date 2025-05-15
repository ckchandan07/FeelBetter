import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-black fixed bottom-0 text-white gap-6 flex justify-around md:justify-center items-center md:gap-[50px] md:top-0 z-20 ">
      <Link to={"/"}>
        <TiHome className="w-[28px] h-[28px] " />
      </Link>
      <Link to={"/search"}>
        <IoSearch className="w-[28px] h-[28px] " />
      </Link>
      <Link to={"/playlist"}>
        <RiPlayListLine className="w-[28px] h-[28px] " />
      </Link>
      <Link to={"/liked"}>
        <IoMdHeart className="w-[28px] h-[28px] " />
      </Link>
      
    </div>
  );
};

export default Navbar;
