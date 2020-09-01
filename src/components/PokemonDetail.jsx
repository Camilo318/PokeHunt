import React, { useState, useEffect } from 'react'

const PokemonDetail = ({match}) => {
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
    
    
    return (
        <div className='pokemon-detail'>
            <div className="pokemon-detail__image">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            </div>

            <div className="pokemon-detail__info">
                <h3>{info.name}</h3>

            </div>
        </div>
    )
}

export default PokemonDetail
