import React from 'react'

export default function CongratsModal() {

    const closeModal = () => {
        document.querySelector('.modal').style.display ='none'
    }

    return (
        <div className="modal" onClick={closeModal}>
          <div class="modal-content">
          <span onClick={closeModal} class="close">&times;</span>

            <p>Yoooo congrats!!</p>
            </div>
</div>
    )
}
