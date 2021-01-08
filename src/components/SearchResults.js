import React from 'react'
import MovieCard from "./MovieCard"

export default function SearchResults({movies}) {


    console.log(movies)


    const movieCards = movies.map(movie => {
        console.log(movie)
        return <MovieCard movie={movie} />
    })


    return (
        <div className="search-results">
            <h2>Search Results</h2>
            {movieCards}
        </div>
    )


}
