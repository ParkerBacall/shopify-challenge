import React from 'react'

export default function RemoveNomination({removeNomination, nomination}) {

    const handleClick = event => {
        removeNomination(nomination)
    }

    return (
        <div className ="button-container">
          <button onClick={handleClick} className="remove-btn">Remove</button>
        </div>
    )
}
