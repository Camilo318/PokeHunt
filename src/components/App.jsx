import React, { useState, useEffect } from 'react'
import Home from './Home'
import Header from './Header'
import { HashRouter, Switch, Route } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Footer from './Footer'

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pokemon/:id' component={PokemonDetail} />
            </Switch>
            <Footer/>
        </HashRouter>
        
    )
}

export default App