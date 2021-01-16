import React from 'react'
import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <div className="main-title-containter">
            <img className="header-image" src={logo} alt="logo"/>
        </div>
    )
}
