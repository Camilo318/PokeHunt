import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <Link to='/'>
                    <h2>Poke Hunt</h2>
                </Link>
            </div>
        </header>
    )
}

export default Header
