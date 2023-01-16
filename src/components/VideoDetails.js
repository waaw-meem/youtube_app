import React from "react";

const VideoDetails = ({video}) => {
    if(!video){
        return <div>Loading ...</div>
    }

    const videoLink = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
       <div>
         <div className="videos">
            <iframe title="video player" src={videoLink} width='100%' height='500px'/>
        </div>
        <div className="ui segment">
            <h4>{video.snippet.title}</h4>
            <div>{video.snippet.description}</div>
        </div>
       </div>
    )
}

export default VideoDetails