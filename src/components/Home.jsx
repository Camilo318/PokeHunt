import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import Aside from './Aside'
import loader from '../assets/images/pokemon.svg'
import getData from '../utils/getData'
import getPokemons from '../utils/getPokemons'
import ReactPaginate from 'react-paginate'

const Home = () => {
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=841'
    const [pokedex, setPokedex] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [perPage] = useState(18)
    

    useEffect(() => {
        getData(api).then(data => {
            getPokemons(data).then(pokemons => {
                setPokedex(pokemons) //This updates the state, re-render
                setIsLoading(false) //This causes a re-render too
            })
        })
    }, []) //Just on mount

    const indexLastPost = (currentPage + 1) * perPage
    const indexFirstPost = indexLastPost - perPage
    const current = pokedex.slice(indexFirstPost, indexLastPost)
    const pageCount = Math.ceil(pokedex.length / perPage)

    const paginate = page => {
        console.log(page)
        setCurrentPage(page.selected)
    }

    return (
        <>
            { isLoading ? 
            <img src={loader} alt="loader" className='loader'/> 
            :
            <section className='pokedex'>
                <Aside />
                { current.map(pokemon => (
                    <Pokemon key={pokemon.id} {...pokemon}/>
                )) }
            </section> }

            <section className='pagination'>
                <ReactPaginate 
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                pageRangeDisplayed={12}
                marginPagesDisplayed={3}
                onPageChange={paginate}
                pageClassName={'page'}
                previousClassName={'page'}
                nextClassName={'page'}
                pageLinkClassName={'link'}
                activeLinkClassName={'active'}

                />
            </section>
        </>
    )
}

export default Home
