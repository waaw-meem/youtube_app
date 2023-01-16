import React from "react";
import SearchBar from "./SearchBar.js"
import YoutubeApi from "../api/YoutubeApi.js";
import VideoList from "./VideoList.js";
import VideoDetails from "./VideoDetails.js";

class App extends React.Component{

    state = { videos: [], videoSelected: null}

    componentDidMount(){
        this.onTermSubmit('Coding')
    }

    onTermSubmit = async term => {
    const response = await YoutubeApi.get('/search', {
            params: {
                q:term
            }
        })
        this.setState({videos:response.data.items,
              videoSelected: response.data.items[0]      
        })
    }

    onVideoSelected = video =>{
        this.setState({
            videoSelected:video,
        
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermEnter={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetails video={this.state.videoSelected}/>
                        </div>
                        <div className="five wide column">
                        <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App