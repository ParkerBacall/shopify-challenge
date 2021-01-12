import React from 'react'
import RemoveNomination from "./RemoveNomination"
import placeholder from "../assets/PosterPlaceholder.jpeg"

export default function NominationCard({nomination, removeNomination}) {
    return (
        <div className="movie-card">

            {nomination.Poster !== "N/A" ? <img className='movie-poster'src={nomination.Poster} alt={nomination.Title}/>
            :
            <img className='movie-poster'src={placeholder} alt={nomination.Title}/>
            }
            <p className='movie-title'>{nomination.Title}</p>
            <p className='movie-year'>({nomination.Year})</p>
            <RemoveNomination nomination={nomination} removeNomination={removeNomination}  />
        </div>
    )
}
