import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors.json'

const Pokemon = (props) => {
    const {name, height, weight, types} = props
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    
    const color = types[0].type.name

    return (
        <div className='pokemon'>
            <div className="pokemon__img"
            style={{backgroundColor: Colors[color] }}>
                <Link to={`/pokemon/${props.id}`}>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt={name}/>
                </Link>
            </div>
            <h4>{nameUpper}</h4>
            {/* <p>{`Height: ${height / 10} m`}</p>
            <p>{`Weight: ${weight / 10} kg`}</p> */}
        </div>
    )
}

export default Pokemon
