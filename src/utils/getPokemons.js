import 'cross-fetch/polyfill'

const getPokemons = async data => {
    const { results } = data
    const pokemons = await Promise.all(results.map(async result => {
        const response = await fetch(result.url)
        const data = await response.json()
        return data
    }))

    return pokemons
}

export default getPokemons