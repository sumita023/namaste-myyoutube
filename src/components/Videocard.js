import React from "react";

const Videocard=({info})=>{
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle, title, thumbnails}=snippet;
    return(
        <div className="p-2 m-2 w-72 shadow-sm">
            <img alt="img" className="rounded-md" src={thumbnails.medium.url}/>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
};

export const AdVideocard=({info})=>{
    return(
        <div className="border border-red-800">
            <Videocard info={info}/>
        </div>
    );
}

export default Videocard;