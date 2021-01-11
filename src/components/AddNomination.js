import React from 'react'

export default function AddNomination({addNomination, movie}) {

    const handleClick = event => {
        addNomination(movie)
    }

    return (
        <div>
            <button onClick={handleClick} className="nominate-btn">Nominate!</button>
        </div>
    )
}
