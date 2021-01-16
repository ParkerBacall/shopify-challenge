import React from 'react'
import ModalRemoveNomination from "./ModalRemoveNomination"
import placeholder from "../assets/PosterPlaceholder.jpeg"

export default function ModalNominationCard({nomination, removeNomination}) {
    return (
        <div className="modal-movie-card">
            <div className="modal-movie-image-container">

            {nomination.Poster !== "N/A" ? <img className='modal-movie-poster'src={nomination.Poster} alt={nomination.Title}/>
            :
            <img className='modal-movie-poster'src={placeholder} alt={nomination.Title}/>
            }
                        </div>

            <div className='modal-movie-title'><p>{nomination.Title}</p></div>
            <div className='modal-movie-year'><p>({nomination.Year})</p></div>
            <ModalRemoveNomination nomination={nomination} removeNomination={removeNomination}  />
        </div>
    )
}
