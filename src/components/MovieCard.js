import React from 'react'
import AddNomination from "./AddNomination"

export default function MovieCard({movie, addNomination}) {
    return (
        <div className="movie-card">
            <img className='movie-poster'src={movie.Poster} alt={movie.Title}/>
            <p className='movie-title'>{movie.Title}</p>
            <p className='movie-year'>{movie.Year}</p>
            <AddNomination movie={movie} addNomination={addNomination}/>
        </div>
    )
}
