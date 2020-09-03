import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors.json'
import { connect } from 'react-redux'
import {deletePokemon} from '../actions/index'

const CapturedPokemon = ({media, id, types, name, deletePokemon}) => {
    const type = types[0].type.name
    return (
        <div className='vault__pokemon'
        style={{backgroundColor: Colors[type]}}>
            <Link to={`/pokemon/${id}`}>
            <img src={media} alt=""/>
            </Link>
            <div className="remove"
            onClick={() => deletePokemon(name)}>
                X
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deletePokemon
}
export default connect(null, mapDispatchToProps)(CapturedPokemon)
