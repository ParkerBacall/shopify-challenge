import React, {Component} from 'react';
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Nominations from "./components/Nominations"
import CongratsModal from "./components/CongratsModal"
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
      <div className="page">
        {this.state.nominations.length >= 5 ?  <CongratsModal/> 
        :
        <div></div>
      }
        <div className="main-title-containter">
          <h1 className="main-title">The Shoppies</h1>
          </div>
          <div className="search-bar-contanier">
            <SearchBar 
            getMovies={this.getMovies} 
             />
                       </div>
            <div className="lower-section">
             <div>
             {this.state.movies.length >= 1 ? <SearchResults movies={this.state.movies} addNomination={this.addNomination}/> 
             : 
             <div></div>
             }
             </div>
             <div>
             {this.state.nominations.length >= 1 ? <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination}/>
                : 
                <div></div>
              }
           </div>
             </div>
          </div>
         
      )
  }

}

export default App;
