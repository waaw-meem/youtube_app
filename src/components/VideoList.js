import React from "react";
import Videoitem from "./Videoitem";

const VideoList = ({videos,onVideoSelected}) =>{

        const renderedList = videos.map(video => {
            return <Videoitem onVideoSelected={onVideoSelected} video={video}/>
        })
        return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList