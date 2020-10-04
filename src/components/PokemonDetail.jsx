import React, { useState, useEffect } from 'react'
import Colors from '../colors.json'
import { connect } from 'react-redux'
import {addPokemon, deletePokemon} from '../actions/index'
import Aside from './Aside'
import getData from '../utils/getData'

const PokemonDetail = (props) => {
    const {addPokemon, deletePokemon, history, match,} = props
    const { myPokemons } = props
    const { id } = match.params
    const [info, setInfo] = useState({})

    useEffect(() => {
        getData(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(data => setInfo(data))

    }, [id])
    
    const { name, height, weight, types} = info
    const capitalize = (x) => {
        return x && x[0].toUpperCase() + x.slice(1)
    }
    
    const colorType = info.types && info.types[0].type.name

    const duplicate = myPokemons.find(pokemon => {
        return pokemon.name === name
    })
    return (
        <div className="pokemon-container">
            <div className='pokemon-detail'>
                <div className="pokemon-detail__image"
                style={{backgroundColor: Colors[colorType]}}>
                    <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    alt={name}
                    onLoad={() => console.log('Loading Image')}
                    />
                </div>

                <div className="pokemon-detail__info">
                    <h3>{capitalize(name)} {id.padStart(3,0)}</h3>
                    <p>Height: {height/10}m</p>
                    <p>Weight: {weight/10}kg</p>
                    <p>Base Experience: {info.base_experience}</p>


                    <p className='types'>Types:
                        {types && types.map(type => (
                        <span key={type.type.name}
                        style={{backgroundColor: Colors[type.type.name]}}>
                            {`#${type.type.name}`}
                        </span>
                        ))}
                    </p>
                    
                    {   duplicate ?
                        <button
                        onClick={() => deletePokemon(info.name)}className='delete'>
                        Delete Pokemon
                        </button>
                        :
                        <button
                        onClick={() => addPokemon(info)} className='add'>
                        Add Pokemon
                        </button>
                    }


                    <button onClick={() => history.goBack()}
                    className='back'>
                        Go back
                    </button>
                </div>
            </div>
            <Aside />
        </div>
    )
}


const mapDispatchToProps = {
    addPokemon,
    deletePokemon
}

const mapStateToProps = state => {
    return {
        myPokemons: state.myPokemons
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (PokemonDetail)
