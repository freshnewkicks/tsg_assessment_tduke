import React from 'react'
import '../css/navbar.scss'

export const Navbar = () => {

    return (
        <nav className="navbar-parent">
            <ul className="navbar-list">
                <li key={1}>Home</li>
                <li key={2}>About</li>
                <li key={3}>
                    <a className="article-link">
                        Articles
                    </a>
                </li>
                <li key={4}>Contact</li>
            </ul>
        </nav>
    )
}