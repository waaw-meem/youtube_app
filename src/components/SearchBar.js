import React from "react";
import "./search.css"


class SearchBar extends React.Component{

    state = {
        term: ''
    }

    onInputChange = e => {
       this.setState({term: e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();

        // console.log(this.state.term)
        this.props.onTermEnter(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="search form">
                    <div className="input form">
                        <label className="input label">Search Video</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} className="search-input"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar