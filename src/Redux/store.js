import { configureStore } from "@reduxjs/toolkit";
import playlistslice from "./playlistslice"
import likedslice from "./likedslice"

export const store = configureStore({
    reducer:{
       playlist:playlistslice,
       liked:likedslice
    }
})

