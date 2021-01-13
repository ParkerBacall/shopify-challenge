import React from 'react'
import Nominations from './Nominations'

export default function CongratsModal({nominations, removeNomination}) {

    const closeModal = () => {
        document.querySelector('.modal').style.display ='none'
    }

    return (
        <div className="modal" onClick={closeModal}>
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
