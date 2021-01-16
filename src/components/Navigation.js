import React from 'react'

export default function Navigation() {
    return (
        <div className="navigation-container"> 
            <ul className="navigation-list">
                 <a className="navigation-link" href="/"><li className="navigation-item home">Home</li></a>
                <a className="navigation-link" href="/about"><li className="navigation-item about">About</li></a>
            </ul>
        </div>
    )
}
