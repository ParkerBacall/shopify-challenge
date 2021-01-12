import React from 'react'
import AddNomination from "./AddNomination"
import placeholder from "../assets/PosterPlaceholder.jpeg"


export default function MovieCard({movie, addNomination}) {
    return (
        <div className="movie-card">
            
            {movie.Poster !== "N/A" ? <img className='movie-poster'src={movie.Poster} alt={movie.Title}/>
           :
           <img className='movie-poster'src={placeholder} alt={movie.Title}/>
           }
           <p className='movie-title'>{movie.Title}</p>
            <p className='movie-year'>({movie.Year})</p>
            <AddNomination movie={movie} addNomination={addNomination}/>
        </div>
    )
}
