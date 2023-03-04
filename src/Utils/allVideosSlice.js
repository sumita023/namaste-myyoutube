import { createSlice } from "@reduxjs/toolkit";

const allVideosSlice=createSlice({
    name:"allVideos",
    initialState:{
        allVideos:[],
    },
    reducers:{
        videoStorage:(state,action)=>{
           state.allVideos.push(action.payload);
        }
    }
});

export const {videoStorage}=allVideosSlice.actions;
export default allVideosSlice.reducer;