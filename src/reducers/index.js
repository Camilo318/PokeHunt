const reducer = (state, action) => {
    switch (action.type) {
        case 'pokemon/addPokemon':
            return {
                ...state,
                myPokemons: [...state.myPokemons, action.payload]
            }
        case 'pokemon/deletePokemon':
            return {
                ...state,
                myPokemons: state.myPokemons.filter(pokemon => pokemon.name !== action.payload)
            }
        default:
            return state

    }
}


export default reducer