import React, { useState }from 'react'
import colors from '../colors.json'
import loader from '../assets/images/loader.svg'
import { useHistory } from 'react-router-dom'


const Pokemon = ({ pokemon }) => {
    const {name, types, id} = pokemon
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    
    const color = types[0].type.name
    const [didLoad, setDidLoad] = useState(false)
    const history = useHistory()

    function showDetails() {
        history.push({
            pathname: `/pokemon/${id}`,
            state: pokemon
        }) 
    }

    return (
        <div className='pokemon'>
            <div className="pokemon__img"
            style={{ backgroundColor: colors[color] }}>

                <img src={loader} alt="loader" className='loader'
                style={{display: didLoad ? 'none' : 'block'}}/>

                <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                alt={name}
                style={{display: didLoad ? 'block' : 'none'}}
                onLoad={() => setDidLoad(true)}
                onClick={showDetails}/>

            </div>
            <h4>{nameUpper}</h4>
        </div>
    )
}

export default Pokemon
