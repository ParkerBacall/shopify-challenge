import React from 'react'
import ModalNominations from './ModalNominations'

export default function CongratsModal({nominations, removeNomination}) {


    const handleSubmit = () => {
       const container = document.querySelector('.submit-container') 
       container.innerHTML = '<div class="loading-dots"><div></div><div></div><div></div><div></div></div>'
        setTimeout(() => {
            container.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center"><p style="color:gold;font-weight:bold">Thanks for your Submission!</p> <button class="submit-button" onClick="{window.location.reload();}"  >Submit Again?</button>`
        }, 1500);
    }

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
            <p className="modal-text">Please Review Your nominations and submit bellow!</p>
            <ModalNominations nominations={nominations} removeNomination={removeNomination}/>
            <div className="submit-container">
            <button onClick={handleSubmit}className="submit-button">Submit!</button>
            </div>
            </div>
</div>
    )
}
