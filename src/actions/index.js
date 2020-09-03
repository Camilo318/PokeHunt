export function addPokemon(payload) {
    return { //action
        type: 'pokemon/addPokemon',
        payload
    }
}