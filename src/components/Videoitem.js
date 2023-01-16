import React from "react";
import Videoitems from "./Videoitems.css"


const Videoitem = ({video,onVideoSelected}) => {
    return(
        <div onClick={() => onVideoSelected(video)} className="video-item item">
        <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} className="ui image"/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
        </div>
    )
}

export default Videoitem