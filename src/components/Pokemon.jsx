import React from 'react'

const Pokemon = (props) => {
    const {name, height, weight, types} = props
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    }

    const color = types[0].type.name

    return (
        <div className='pokemon'>
            <div className="pokemon__img"
            style={{backgroundColor: colors[color] }}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt={name}/>
            </div>
            <h4>{nameUpper}</h4>
            {/* <p>{`Height: ${height / 10} m`}</p>
            <p>{`Weight: ${weight / 10} kg`}</p> */}
        </div>
    )
}

export default Pokemon
