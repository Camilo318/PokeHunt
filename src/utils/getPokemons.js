const getPokemons = async (data) => {
    const pokemons = []
    data.results.forEach(p => {
        const pokemon = fetch(p.url).then(res => res.json())
        pokemons.push(pokemon)
    })

    const resolvedPokemons = await Promise.all(pokemons)

    return resolvedPokemons
}

export default getPokemons