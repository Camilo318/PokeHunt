import React from 'react'
import { Link } from 'react-router-dom'

const CapturedPokemon = ({media, id}) => {
    return (
        <div className='vault__pokemon'>
            <Link to={`/pokemon/${id}`}>
            <img src={media} alt=""/>
            </Link>
        </div>
    )
}

export default CapturedPokemon
