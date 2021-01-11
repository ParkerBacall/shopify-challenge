import React from 'react'
import NominationCard from "./NominationCard"

export default function Nominations({nominations, removeNomination}) {

    const nominationsCards = nominations.map(nomination => {
        return <NominationCard nomination={nomination} removeNomination={removeNomination} />

    })
    return (
        <div className="nominations-container">
              <h2>Nominations</h2>
            {nominationsCards}
        </div>
    )
}
