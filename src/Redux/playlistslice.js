import { createSlice } from "@reduxjs/toolkit";

const playlistslice = createSlice({
    name: "playlist",
    initialState:[],
    reducers:{
        AddSong:(state,action)=>{
            let exist = state.find((song)=>song.songIndex==action.payload.songIndex)
            if(exist){
                return
            }else{
                state.push(action.payload)
            }
            
        },
        RemoveSong:(state,action)=>{
           return state.filter((song)=>(song.songIndex!==action.payload))
        }
    }
})

export const {AddSong,RemoveSong} = playlistslice.actions
export default playlistslice.reducer