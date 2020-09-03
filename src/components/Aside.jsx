import React from 'react'
import { connect } from 'react-redux'
import CapturedPokemon from './CapturedPokemon'

const Aside = ({myPokemons}) => {
    return (
        <div className='aside'>
            <div className="search">
                <input type="text" placeholder='Search Pokemon'/>
            </div>
            <div className="vault">
                {
                    myPokemons.length > 0 && (
                        <>
                            {myPokemons.map(pokemon => (
                                <CapturedPokemon key={pokemon.name}
                                id={pokemon.id}
                                media={pokemon.sprites.front_default}/>
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
