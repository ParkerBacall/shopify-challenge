import React from 'react'

export default function ModalRemoveNomination({removeNomination, nomination}) {

    const handleClick = event => {
        removeNomination(nomination)
    }

    return (
        <div className ="modal-remove-container">
          <button onClick={handleClick} className="modal-remove-button">x</button>
        </div>
    )
}
