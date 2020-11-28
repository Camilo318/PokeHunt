import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../colors.json'
import { connect } from 'react-redux'
import {deletePokemon} from '../actions/index'
import remove from '../assets/images/cancel.png'
import { useLocalStorage } from '../utils/useLocalStorage'
import { useHistory } from 'react-router-dom'

const CapturedPokemon = (props) => {
    const {media, id, types, name, deletePokemon, myPokemons} = props
    const type = types[0].type.name
    const [storage, setStorage] = useLocalStorage('pokemons', '')

    const deleteP = payload => {
        deletePokemon(payload)
        const pokemons = myPokemons.filter(pokemon => pokemon.name !== payload)
        setStorage(pokemons)
    }

    const history = useHistory()

    function showDetails() {
        history.push({
            pathname: `/pokemon/${id}`,
            state: props.pokemon
        })
    }


    return (
        <div className='vault__pokemon'
        style={{backgroundColor: colors[type]}}>

            <img src={media} alt={name} className="vault__image"
            onClick={showDetails}/>

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
