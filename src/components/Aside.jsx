import React from 'react'
import { connect } from 'react-redux'
import CapturedPokemon from './CapturedPokemon'
import search from '../assets/images/icon-search.png'
const Aside = ({myPokemons, showAside}) => {
    return  (
        <div className={`aside ${showAside ? 'showHide' : ''}`}>
            <div className="aside__container">
                
                <div className="search">
                    <input type="text" placeholder='Search Pokemon'
                    onFocus={() => alert('This feature is coming soon 😉. Searching within 1050 resources can mess things up, so the entire team is carefully making tests to avoid taking a toll on performance')}/>
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
                                    pokemon={pokemon}
                                    />
                                ))}
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myPokemons: state.myPokemons,
        showAside: state.showAside
    }
}

export default connect(mapStateToProps, null)(Aside)
