import React, {Component} from 'react';
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Nominations from "./components/Nominations"
import CongratsModal from "./components/CongratsModal"
import Header from "./components/Header"

import './App.css';

class App extends Component {
  state = {
    movies: [],
    nominations: [],
    searchTerm: ""
  }


  getMovies = term => {
    fetch('http://www.omdbapi.com/?s=' + term + '&type=movie&apikey=728e9f86')
    .then(response => response.json())
    .then(response => {
      if(response.Response !== "False"){
      this.setState({
      movies : response.Search
    })
  }
  
  }
  )

  }

  addNomination= movie => {
    if (!this.state.nominations.includes(movie)){
    this.setState({nominations: [...this.state.nominations, movie] })
    }
  }

  removeNomination= nomination => {
    const newNominations = this.state.nominations.filter(newNominations => {
      return newNominations !== nomination
    })
    this.setState({
      nominations: newNominations
  })
  }

  render(){
    return (
      <div className="page-container">

      <div className="page">
        {this.state.nominations.length >= 5 ?  <CongratsModal/> 
        :
        <div></div>
      }
        <Header/>
            <SearchBar getMovies={this.getMovies} />
            <div class="reviews-and-nominations">
             {this.state.movies.length >= 1 ? <SearchResults movies={this.state.movies} addNomination={this.addNomination}/> 
             : 
             <div className="search-placeholder"></div>
             }

             {this.state.nominations.length >= 1 ? <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination}/>
                : 
                <div className="nominations-placeholder"></div>
              }
              </div>
             </div>
          </div>
         
      )
  }

}

export default App;
