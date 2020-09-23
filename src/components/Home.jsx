import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import Aside from './Aside'
import Loader from '../assets/images/pokemon.svg'
import getData from '../utils/getData'
import getPokemons from '../utils/getPokemons'

const Home = () => {
    const [pokedex, setPokedex] = useState([])
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18')
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getData(currentPage).then(data => {
            setPrevPage(data.previous)
            setNextPage(data.next)
            getPokemons(data).then(pokemons => {
                setPokedex(pokemons)
                setIsLoading(false)
                console.log(pokemons)
            })
        })

        console.log('Billie')
    }, [currentPage])

    return (
        <>
            {isLoading ? 
            <img src={Loader} alt="loader" className='loader'/> 
            :
            <section className='pokedex'>
                <Aside />
                {pokedex.map(pokemon => {
                    return (
                        <Pokemon key={pokemon.id} {...pokemon}/>
                    )
                })}
            </section>
            }

            <section className='pagination'>
                {
                    prevPage &&
                    <button onClick={() => setCurrentPage(prevPage)}>
                        Prev
                    </button>
                }
                {
                    nextPage &&
                    <button onClick={() => setCurrentPage(nextPage)}>
                        Next
                    </button>
                }
            </section>
        </>
    )
}

export default Home
