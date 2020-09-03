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