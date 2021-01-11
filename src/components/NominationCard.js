import React from 'react'
import RemoveNomination from "./RemoveNomination"

export default function NominationCard({nomination, removeNomination}) {
    return (
        <div className="movie-card">
            <img className='movie-poster'src={nomination.Poster} alt={nomination.Title}/>
            <p className='movie-title'>{nomination.Title}</p>
            <p className='movie-year'>{nomination.Year}</p>
            <RemoveNomination nomination={nomination} removeNomination={removeNomination}  />
        </div>
    )
}
