import React, { Component } from 'react'


class SearchBar extends Component {

    state ={
      searchTerm: "",
    }
    
     handleSubmit = event => {
        event.preventDefault();
        const term = this.state.searchTerm
        this.props.getMovies(term)

    }

    handleChange = event => {
        this.props.getMovies(event.target.value)


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
                onChange={this.handleChange}
                >
                
                </input>
            </form>
        </div>
    )
    }
}

export default SearchBar 