import React, { useState, useEffect } from 'react'
import colors from '../colors.json'
import { connect } from 'react-redux'
import {addPokemon, deletePokemon} from '../actions/index'
import Aside from './Aside'
import { useLocation } from 'react-router-dom'
import { useLocalStorage } from '../utils/useLocalStorage'
import Footer from './Footer'

const PokemonDetail = (props) => {
    const {addPokemon, deletePokemon, history, match,} = props
    const { myPokemons } = props
    const { id } = match.params
    const location = useLocation()
    const [storage, setStorage] = useLocalStorage('pokemons', '')

    
    const { name, height, weight, types } = location.state
    const { base_experience } = location.state

    const capitalize = (x) => {
        return x && x[0].toUpperCase() + x.slice(1)
    }
    
    const colorType =  types[0].type.name

    const duplicate = myPokemons.find(pokemon => {
        return pokemon.name === name
    })

    const add = payload => {
        addPokemon(payload)
        const pokemons = [...myPokemons, payload]
        setStorage(pokemons)
    }

    const deleteP = payload => {
        deletePokemon(payload)
        const pokemons = myPokemons.filter(pokemon => (
            pokemon.name !== payload))
        setStorage(pokemons)
    }
    const source = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <>
            <div className="pokemon-container">
                <div className='pokemon-detail'>
                    <div className="pokemon-detail__image"
                    style={{backgroundColor: colors[colorType]}}>

                        <img
                        src={source}
                        alt={name}
                        onLoad={() => console.log('Loading Image')}
                        />
                    </div>

                    <div className="pokemon-detail__info">
                        <h3>{capitalize(name)} {id.padStart(3,0)}</h3>
                        <p>Height: {height/10}m</p>
                        <p>Weight: {weight/10}kg</p>
                        <p>Base Experience: {base_experience}</p>


                        <p className='types'>Types:
                            { types.map(type => (
                                <span key={type.type.name}>
                                    {`#${type.type.name}`}
                                </span>
                            ))}
                        </p>
                        
                        {   duplicate ?
                            <button
                            onClick={() => deleteP(name)}className='delete'>
                                Delete Pokemon
                            </button>
                            :
                            <button
                            onClick={() => add(location.state)} className='add'>
                                Add Pokemon
                            </button>
                        }


                        <button onClick={() => history.push('/')}
                        className='back'>
                            Go back
                        </button>
                    </div>
                </div>
                <Aside />
            </div>
            <Footer />
        </>
    )
}


const mapDispatchToProps = {
    addPokemon,
    deletePokemon
}

const mapStateToProps = state => {
    return {
        myPokemons: state.myPokemons,
        currentPage: state.currentPage
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (PokemonDetail)
