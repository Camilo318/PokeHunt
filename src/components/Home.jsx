import React, { useState, useEffect } from 'react'

const Home = () => {
    const [pokedex, setPokedex] = useState([])
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15')
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const pokemons = [] //Array of promises
    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true)
            const res = await fetch(currentPage)
            const data = await res.json()
            console.log(data)
            setPrevPage(data.previous)
            setNextPage(data.next)
            data.results.forEach(p => {
                pokemons.push(fetch(p.url)
                .then(resp => resp.json()))
            })
            const resolvedPokemons = await Promise.all(pokemons)
            setPokedex(resolvedPokemons)
            setIsLoading(false)
        }

        getPokemons()
    }, [currentPage])

    return (
        <>
            {isLoading ? 'Loading...' :
            
            <section className='pokedex'>
                {pokedex.map(pokemon => {
                    return (
                        <h3 key={pokemon.id}>
                            {pokemon.name}
                        </h3>
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