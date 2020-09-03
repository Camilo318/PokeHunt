import React from 'react'
import { connect } from 'react-redux'
import CapturedPokemon from './CapturedPokemon'
import search from '../assets/images/icon-search.png'
const Aside = ({myPokemons}) => {
    return (
        <div className='aside'>
            <div className="search">
                <input type="text" placeholder='Search Pokemon'/>
                <img src={search} alt=""/>
            </div>
            <h3>My Pokemons</h3>
            <div className="vault">
                {
                    myPokemons.length > 0 && (
                        <>
                            {myPokemons.map(pokemon => (
                                <CapturedPokemon key={pokemon.name}
                                id={pokemon.id}
                                media={pokemon.sprites.front_default}
                                name={pokemon.name}
                                types={pokemon.types}
                                />
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myPokemons: state.myPokemons
    }
}

export default connect(mapStateToProps, null)(Aside)
