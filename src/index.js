import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './components/App'
import './assets/styles/style.scss'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import initialState from './myPokemons.json'
import reducer from './reducers/index.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose
const store = createStore(reducer, initialState, composeEnhancers)


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'))


