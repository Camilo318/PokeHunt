import React, { useState } from 'react'
import loader from '../assets/images/loader.svg'
import { useHistory } from 'react-router-dom'


const Pokemon = ({ pokemon }) => {
    const {name, id} = pokemon
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    const [didLoad, setDidLoad] = useState(false)
    const history = useHistory()
    const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    function showDetails() {
        history.push({
            pathname: `/pokemon/${id}`,
            state: pokemon
        }) 
    }

    return (
        <div className='pokemon'>
            <div className="pokemon__img">

                <img
                src={loader}
                alt="loader"
                className='loader'
                style={
                    {display: didLoad ? 'none' : 'block'}
                }/>

                <img
                src={image}
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
