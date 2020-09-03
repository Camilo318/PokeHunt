import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors.json'

const CapturedPokemon = ({media, id, types}) => {
    const type = types[0].type.name
    return (
        <div className='vault__pokemon'
        style={{backgroundColor: Colors[type]}}>
            <Link to={`/pokemon/${id}`}>
            <img src={media} alt=""/>
            </Link>
        </div>
    )
}

export default CapturedPokemon
