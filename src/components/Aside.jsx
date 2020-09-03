import React from 'react'
import { connect } from 'react-redux'

const Aside = ({myPokemons}) => {
    return (
        <div className='aside'>
            <div className="search">
                <input type="text" placeholder='Search Pokemon'/>
            </div>
            <div className="vault">
                {
                    myPokemons.length > 0 && (
                        <div>
                            {myPokemons.map(pokemon => (
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            ))}
                        </div>
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
