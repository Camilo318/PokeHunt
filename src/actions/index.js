export function addPokemon(payload) {
    return { //action
        type: 'pokemon/addPokemon',
        payload
    }
}

export function deletePokemon(payload) {
    return {
        type: 'pokemon/deletePokemon',
        payload
    }
}

export function toggleAside(payload) {
    return {
        type: 'aside/toggleAside',
        payload
    }
}

export function setCurrentPage(payload) {
    return {
        type: 'set-page',
        payload
    }
}

export function setAllPokemons(payload) {
    return {
        type: 'set-all-pokemons',
        payload
    }
}

export const fetchPokemons = (api, getData, getPokemons) => {
    //thunk action creator
    return async function fetchPokemonsThunk(dispatch) {
        const data = await getData(api)
        const pokemons = await getPokemons(data)
        dispatch(setAllPokemons(pokemons))
    }
}