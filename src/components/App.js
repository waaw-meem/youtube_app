import React from "react";
import SearchBar from "./SearchBar.js"
import YoutubeApi from "../api/YoutubeApi.js";
import VideoList from "./VideoList.js";

class App extends React.Component{

    state = { videos: [] }
    onTermSubmit = async term => {
        // console.log(term)

    const response = await YoutubeApi.get('/search', {
            params: {
                q:term
            }
        })
        this.setState({videos:response.data.items})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermEnter={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App