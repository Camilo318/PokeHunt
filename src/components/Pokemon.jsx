import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import colors from '../colors.json'
import loader from '../assets/images/pokemon.svg'


const Pokemon = (props) => {
    const {name, types} = props
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    
    const color = types[0].type.name
    const [didLoad, setDidLoad] = useState(false)
    return (
        <div className='pokemon'>
            <div className="pokemon__img"
            style={{backgroundColor: colors[color] }}>
                <img src={loader} alt="loader" className='loader'
                style={{display: didLoad ? 'none' : 'block'}}/> 
                <Link to={`/pokemon/${props.id}`}>
                    <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
                    alt={name}
                    style={{display: didLoad ? 'block' : 'none'}}
                    onLoad={() => setDidLoad(true)}
                    />
                </Link>
            </div>
            <h4>{nameUpper}</h4>
        </div>
    )
}

export default Pokemon
