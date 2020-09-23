import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleAside } from '../actions/index'

const Header = ({toggleAside}) => {
    return (
        <header className='header'>
            <div className="header__container">
                <Link
                to={{
                    pathname: '/',
                    search: '?offset=0&limit=18'
                }}>
                    <h2>Poke Hunt</h2>
                </Link>
                <span onClick={() => toggleAside()}>
                    •••
                </span>
            </div>
        </header>
    )
}

const mapDispatchToProps = {
    toggleAside
}
export default connect(null, mapDispatchToProps)(Header)
