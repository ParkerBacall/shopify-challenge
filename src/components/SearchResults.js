import React from 'react'
import MovieCard from "./MovieCard"

export default function SearchResults({movies,addNomination, nominations }) {


    const movieCards = movies.map(movie => {
        return <MovieCard  movie={movie} nominations={nominations} addNomination={addNomination}/>
    })


    return (
        <div className="search-results-container" >
            <h2>Search Results</h2>
            {movieCards}
        </div>
    )


}
