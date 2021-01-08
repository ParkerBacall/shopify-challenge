import React, { Component } from 'react'


class SearchBar extends Component {

    state ={
      searchTerm: "",
    }
    
     handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchTerm);
        const term = this.state.searchTerm
        this.props.getMovies(term)

    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });

    }

   
    render(){
    return (

        <div className="search-bar-full-width">
            <h2>Movie Title</h2>
            <form
            onSubmit={this.handleSubmit}>
                <input 
                className="search-bar-input" 
                type="text"
                placeholder="Search a Movie!"
                value={this.state.searchTerm}
                onChange={this.handleChange}
                >
                
                </input>
                <input type="submit" className="submit-search"/>
            </form>
        </div>
    )
    }
}

export default SearchBar 