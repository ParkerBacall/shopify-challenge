import React, {Component} from 'react';

import './App.css';

class App extends Component {
  state = {
    movies: [],
   
  }

  componentDidMount(){ 
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=728e9f86')
    .then(response => response.json())
    .then(movies => this.setState({
      movies
    }))
  }


  render(){
    return (
        <div>
          <h1>hello world</h1>
          </div>
      )
  }

}

export default App;
