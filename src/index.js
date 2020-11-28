import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './components/App'
import './assets/styles/style.scss'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers/index.js'


const capturedPokemons = JSON.parse(window.localStorage.getItem('pokemons'))
const initialState = {
    myPokemons: capturedPokemons || [],
    currentPage: 0,
    allPokemons: [],
    showAside: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose
const store = createStore(reducer, initialState, composeEnhancers())


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'))


