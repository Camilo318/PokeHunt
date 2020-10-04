import React, { useState, useLayoutEffect } from 'react'
import Pokemon from './Pokemon'
import Aside from './Aside'
import Loader from '../assets/images/pokemon.svg'
import getData from '../utils/getData'
import getPokemons from '../utils/getPokemons'
import { Link } from 'react-router-dom'

const Home = ({location}) => {
    const api = 'https://pokeapi.co/api/v2/pokemon'
    const [options, setOptions] = useState('?offset=0&limit=18')
    const [pokedex, setPokedex] = useState([])
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useLayoutEffect(() => {
        if (location.search) {
            setOptions(location.search)
        }
    }, [location.search])

    useLayoutEffect(() => {
        setIsLoading(true)
        getData(api+options).then(data => {
            setPrevPage(data.previous)
            setNextPage(data.next)
            getPokemons(data).then(pokemons => {
                setPokedex(pokemons)
                setIsLoading(false)
                console.log(pokemons)
            })
        })

        console.log('Billie')
    }, [options])

    return (
        <>
            {isLoading ? 
            <img src={Loader} alt="loader" className='loader'/> 
            :
            <section className='pokedex'>
                <Aside />
                {
                    pokedex.map(pokemon => (
                        <Pokemon key={pokemon.id} {...pokemon}/>
                    ))
                }
            </section>
            }

            <section className='pagination'>
                {
                    prevPage &&
                    <button>
                        <Link
                        to={{
                            pathname: '/',
                            search: `?${prevPage.split('?')[1]}`
                        }}>
                        Prev
                        </Link>
                    </button>
                }
                {
                    nextPage &&
                    <button>
                        <Link
                        to={{
                            pathname: '/',
                            search: `?${nextPage.split('?')[1]}`
                        }}>
                        Next
                        </Link>
                    </button>
                }
            </section>
        </>
    )
}

export default Home
