import React, { useState, useEffect } from 'react'
import myPokemons from './myPokemons.json'
import Home from './Home'
import Header from './Header'

const App = () => {
    return (
        <>
            <Header />
            <Home />
        </>
    )
}

export default App