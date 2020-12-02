import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import Aside from './Aside'
import loader from '../assets/images/pokemon.svg'
import getData from '../utils/getData'
import getPokemons from '../utils/getPokemons'
import ReactPaginate from 'react-paginate'
import Scroll from './Scroll'
import { connect } from 'react-redux'
import { setCurrentPage, setAllPokemons } from '../actions/index'


const Home = (props) => {
    const {currentPage, setCurrentPage} = props
    const {allPokemons, setAllPokemons} = props
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=843'
    const [pokedex, setPokedex] = useState(allPokemons)
    const [isLoading, setIsLoading] = useState(true)
    const [perPage] = useState(18)
    

    useEffect(() => {
        async function getPokeInfo() {
            if (allPokemons.length < 1) {
                const data = await getData(api)
                const pokemons = await getPokemons(data)
                setPokedex(pokemons) //This updates the state, re-render
                setAllPokemons(pokemons)
                setIsLoading(false) //This causes a re-render too
            }
            else {
                setIsLoading(false) //This causes a re-render too
            }
        }
        getPokeInfo()
        
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
            (<Scroll>
                <section className='pokedex' id='pokedex'>
                    <Aside />
                    { current.map(pokemon => (
                        <Pokemon key={pokemon.id} pokemon={pokemon}/>
                    )) }
                </section>
            </Scroll>) }

            { !isLoading && <section className='pagination'>
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
                nextLinkClassName={'link'}
                previousLinkClassName={'link'}
                activeLinkClassName={'active'}
                initialPage={currentPage}/>
            </section> }
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        allPokemons: state.allPokemons
    }
}

const mapDispatchToProps = {
    setCurrentPage,
    setAllPokemons
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
