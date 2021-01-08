import React, {Component} from 'react';
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"

// http://www.omdbapi.com/?i=tt3896198&apikey=728e9f86

import './App.css';

class App extends Component {
  state = {
    movies: [],
    nominations: [],
    searchTerm: ""
  }


  getMovies = term => {
    fetch('http://www.omdbapi.com/?s=' + term + '&apikey=728e9f86')
    .then(response => response.json())
    .then(resposne => this.setState({
      movies : resposne.Search
    }))
  }

  render(){
    return (
      <div className="page">
        <div className="main-title-containter">
          <h1 className="main-title">The Shoppies</h1>
          </div>
          <div className="search-bar-contanier">
            <SearchBar 
            getMovies={this.getMovies} 
             />
                       </div>

             <div className="search-results-container">
             {this.state.movies.length > 1 ? <SearchResults movies={this.state.movies}/> 
             : 
             <div></div>
             }
             </div>
          </div>
      )
  }

}

export default App;
