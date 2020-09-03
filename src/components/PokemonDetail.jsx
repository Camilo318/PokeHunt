import React, { useState, useEffect } from 'react'
import Colors from '../colors.json'
import { connect } from 'react-redux'
import {addPokemon, deletePokemon} from '../actions/index'

const PokemonDetail = (props) => {
    const {addPokemon, deletePokemon, history, match} = props
    const { id } = match.params
    const [info, setInfo] = useState({})

    useEffect(() => {
        const getPokemonInfo = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const data = await res.json()
            console.log(data)
            setInfo(data)

        }
        getPokemonInfo()
    }, [])
    
    const { name, height, weight} = info
    const capitalize = (x) => {
        return x && x[0].toUpperCase() + x.slice(1)
    }
    const getTypes = (x) => {
        return x && x.map(type => `#${type.type.name}`).join(' ')
    }
    const colorType = info.types && info.types[0].type.name
    return (
        <div className="pokemon-container">
            <div className='pokemon-detail'>
                <div className="pokemon-detail__image"
                style={{backgroundColor: Colors[colorType]}}>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
                </div>

                <div className="pokemon-detail__info">
                    <h3>{capitalize(name)} {id.padStart(3,0)}</h3>
                    <p>Height: {height/10}m</p>
                    <p>Weight: {weight/10}kg</p>
                    <p>Base Experience: {info.base_experience}</p>
                    {info.abilities &&
                    <p>Abilities: {info.abilities.map((a,i) => {
                        return (
                            <span key={i}>
                                {capitalize(a.ability.name)}
                            </span>
                        )
                    })}</p>}
                    <p>Types: {getTypes(info.types)}</p>
                    <button onClick={() => history.goBack()}>
                        Go back
                    </button>
                    <button onClick={() => addPokemon(info)}>
                        Add Pokemon
                    </button>
                    <button onClick={() => deletePokemon(info.name)}>
                        Delete Pokemon
                    </button>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    addPokemon,
    deletePokemon
}
export default connect(null, mapDispatchToProps) (PokemonDetail)
