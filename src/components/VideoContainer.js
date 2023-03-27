import React, { useState, useEffect } from "react";
import Videocard, { AdVideocard } from "./Videocard";
import { YOUTUBE_VIDEOS_API } from "../Utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { videoStorage } from "../Utils/allVideosSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    // get all videos
    getVideos();
    // console.log("2");
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
    dispatch(videoStorage(json.items));
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideocard info={videos[0]}/>}
      {
      videos.length > 0 && 
        videos.map((video) => {
         return  <Link to={"/watch?v="+video.id}><Videocard info={video}/></Link>;
        })}
    </div>
  );
};

export default VideoContainer;
