import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors.json'
import { connect } from 'react-redux'
import {deletePokemon} from '../actions/index'
import remove from '../assets/images/cancel.png'

const CapturedPokemon = ({media, id, types, name, deletePokemon}) => {
    const type = types[0].type.name
    return (
        <div className='vault__pokemon'
        style={{backgroundColor: Colors[type]}}>
            <Link to={`/pokemon/${id}`}>
            <img src={media} alt="" className="vault__image"/>
            </Link>
            <div className="remove"
            onClick={() => deletePokemon(name)}>
                <img src={remove} alt="Remove Pokemon"/>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deletePokemon
}
export default connect(null, mapDispatchToProps)(CapturedPokemon)
