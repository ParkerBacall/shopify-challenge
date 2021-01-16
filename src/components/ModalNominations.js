import React from 'react'
import ModalNominationCard from "./ModalNominationCard"

export default function ModalNominations({nominations, removeNomination}) {

    const ModalNominationCards = nominations.map(nomination => {
        return <ModalNominationCard nomination={nomination} removeNomination={removeNomination} />

    })
    return (
        <div>
              <h2 className="modal-nominations-title">Nominations</h2>
              <div className="modal-nominations-container">
            {ModalNominationCards}
            </div>
        </div>
    )
}
