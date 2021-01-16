import React from 'react'
import ModalNominations from './ModalNominations'

export default function CongratsModal({nominations, removeNomination}) {


    const closeModal = () => {
        document.querySelector('.modal').style.display ='none'
    }
    window.onclick = function(event) {
        const modal = document.querySelector('.modal')

    if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    return (
        <div className="modal" >
          <div class="modal-content">
          <span onClick={closeModal} class="close">&times;</span>

            <h1 className="modal-title">Thank You!</h1>
            <p className="modal-text">Please Review Your submissions and submit bellow!</p>
            <ModalNominations nominations={nominations} removeNomination={removeNomination}/>
            <div className="submit-container">
            <button>Sumbit!</button>
            </div>
            </div>
</div>
    )
}
