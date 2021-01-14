import React from 'react'

export default function AddNomination({addNomination, movie, nominations}) {

    const handleClick = event => {
        addNomination(movie)
    }

    return (
        <div className="button-container">
            {nominations.includes(movie)          
            ?
            <button  className="nominate-btn disabled">Nominate!</button>

            :
            <button onClick={handleClick} className="nominate-btn">Nominate!</button>

            }
        </div>
    )
}
