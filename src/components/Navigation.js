import React from 'react'

export default function Navigation() {



    return (
        <div className="navigation-container"> 
                {window.location.href.includes('about') ? 
                <div>
                 <ul className="navigation-list">

              <a className="navigation-link" href="/"><li className="navigation-item">Home</li></a>
              <span className="navigation-link selected"  ><li className="navigation-item">About</li></span>    
                </ul>
              </div>
              :
              <div>
               <ul className="navigation-list">

              <span className="navigation-link selected" ><li className="navigation-item">Home</li></span>
              <a className="navigation-link" href="/about"><li className="navigation-item">About</li></a>
                </ul>
                </div>
            }
     </div>
    )
}
