import React from 'react'

export default function ModalOpener() {
    const openModal = () => {
        document.querySelector('.modal').style.display ='block'
    }
    return (
        <div className="review-submissions-container">
            <button onClick={openModal} className="review-submissions-button"> Review Nominations and Submit </button>
        </div>
    )
}
