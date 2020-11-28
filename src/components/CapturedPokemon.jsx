import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors.json'
import { connect } from 'react-redux'
import {deletePokemon} from '../actions/index'
import remove from '../assets/images/cancel.png'
import { useLocalStorage } from '../utils/useLocalStorage'

const CapturedPokemon = (props) => {
    const {media, id, types, name, deletePokemon, myPokemons} = props
    const type = types[0].type.name
    const [storage, setStorage] = useLocalStorage('pokemons', '')

    const deleteP = payload => {
        deletePokemon(payload)
        const pokemons = myPokemons.filter(pokemon => pokemon.name !== payload)
        setStorage(pokemons)
    }
    return (
        <div className='vault__pokemon'
        style={{backgroundColor: Colors[type]}}>
            <Link to={`/pokemon/${id}`}>
            <img src={media} alt={name} className="vault__image"/>
            </Link>
            <div className="remove"
            onClick={() => deleteP(name)}>
                <img src={remove} alt="Remove Pokemon"/>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deletePokemon
}
const mapStateToProps = state => {
    return {
        myPokemons: state.myPokemons
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CapturedPokemon)
