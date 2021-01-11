import React from 'react'

export default function RemoveNomination({removeNomination, nomination}) {

    const handleClick = event => {
        removeNomination(nomination)
    }

    return (
        <div>
          <button onClick={handleClick} className="remove-btn">Remove</button>
        </div>
    )
}
