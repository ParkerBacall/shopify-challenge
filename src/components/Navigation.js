import React from 'react'

export default function Navigation() {
    return (
        <div className="navigation-container"> 
            <ul className="navigation-list">
                <li className="navigation-item home"> <a className="navigation-link" href="/">Home</a></li>
                <li className="navigation-item about">< a className="navigation-link" href="/about">About</a> </li>
            </ul>
        </div>
    )
}
