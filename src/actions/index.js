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