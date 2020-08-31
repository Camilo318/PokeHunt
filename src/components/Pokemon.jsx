import React from 'react'

const Pokemon = (props) => {
    const {name, height, weight} = props
    const nameUpper = name[0].toUpperCase() + name.slice(1)
    return (
        <div className='pokemon'>
            <div className="pokemon__img">
                <img src="" alt={name}/>
            </div>
            <h4>{nameUpper}</h4>
            {/* <p>{`Height: ${height / 10} m`}</p>
            <p>{`Weight: ${weight / 10} kg`}</p> */}
        </div>
    )
}

export default Pokemon
