import {configureStore} from '@reduxjs/toolkit'
import allVideosSlice from './allVideosSlice';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
const store=configureStore({
 reducer:{
   app:appSlice,
   search:searchSlice,
   allVideos: allVideosSlice,
 },
});

export default store;