import React from "react";
import Videoitems from "./Videoitems.css"


const Videoitem = ({video}) => {
    return(
        <div className="video-item item">
        <img src={video.snippet.thumbnails.medium.url} className="ui image"/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
        </div>
    )
}

export default Videoitem