const reducer = (state, action) => {
    switch (action.type) {
        case 'pokemon/addPokemon':
            const duplicate = state.myPokemons.find(pokemon => pokemon.name === action.payload.name)
            return duplicate ? state :
            {
                ...state,
                myPokemons: [...state.myPokemons, action.payload]
            }
        case 'pokemon/deletePokemon':
            return {
                ...state,
                myPokemons: state.myPokemons.filter(pokemon => pokemon.name !== action.payload)
            }
        case 'aside/toggleAside':
            return {
                ...state,
                showAside: !state.showAside

            }
        case 'set-page':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'set-all-pokemons':
            return {
                ...state,
                allPokemons: action.payload

            }
        default:
            return state

    }
}


export default reducer