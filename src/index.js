import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './components/App'
import './assets/styles/style.scss'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index.js'


const capturedPokemons = JSON.parse(window.localStorage.getItem('pokemons'))
const initialState = {
    myPokemons: capturedPokemons || [],
    currentPage: 0,
    allPokemons: [],
    showAside: false
}
const enhancer = applyMiddleware(thunkMiddleware)
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(enhancer)
)


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)


