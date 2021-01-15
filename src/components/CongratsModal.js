import React from 'react'
import Nominations from './Nominations'

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

            <h1>Thank You!</h1>
            <p>Please Review Your submissions and submit bellow!</p>
            <Nominations nominations={nominations} removeNomination={removeNomination}/>
            <button>Sumbit!</button>
            </div>
</div>
    )
}
