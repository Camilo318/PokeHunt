import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import Aside from './Aside'
import ReactPaginate from 'react-paginate'
import Scroll from './Scroll'
import { connect } from 'react-redux'
import { setCurrentPage, fetchPokemons } from '../actions/index'

const api = 'https://pokeapi.co/api/v2/pokemon?limit=843'

const Home = (props) => {

    const { currentPage, setCurrentPage } = props
    const { allPokemons, fetchPokemons } = props
    const [isLoading, setIsLoading] = useState(true)
    const [perPage] = useState(18)
    

    useEffect(() => {
        async function loadPokemons() {
            if (allPokemons.length === 0) {
                await fetchPokemons(api)
                setIsLoading(false)
            }
            setIsLoading(false)
        }
        loadPokemons()
    }, []) //Just on mount

    const indexLastPost = (currentPage + 1) * perPage
    const indexFirstPost = indexLastPost - perPage
    const current = allPokemons.slice(indexFirstPost, indexLastPost)
    const pageCount = Math.ceil(allPokemons.length / perPage)

    const paginate = page => {
        setCurrentPage(page.selected)
    }

    return (
        <>
            { isLoading ? 
            <h2 style={{textAlign: "center"}}>
                Loading...
            </h2>
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
    fetchPokemons
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
