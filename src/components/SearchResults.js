import React from 'react'
import MovieCard from "./MovieCard"

export default function SearchResults({movies,addNomination }) {


    const movieCards = movies.map(movie => {
        return <MovieCard movie={movie} addNomination={addNomination}/>
    })


    return (
        <div className="search-results-container" >
            <h2>Search Results</h2>
            {movieCards}
        </div>
    )


}
