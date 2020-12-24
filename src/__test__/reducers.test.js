import reducer from '../reducers/index'

describe('Testing reducer', () => {
    let initialState

    afterEach(() => {
        console.log(initialState)
    })

    beforeAll(() => {
        initialState = {
            myPokemons: [],
            currentPage: 0,
            allPokemons: [],
            showAside: false
        }
    })

    test('should add a pokemon', () => {
        const action = {
            type: 'pokemon/addPokemon',
            payload: {name: 'Billie', age: 18}
        }

        let result = reducer(initialState, action)
        expect(result.myPokemons.length).toBe(1)
        expect(initialState.myPokemons.length).toBe(0)
    })

    test('should toggle aside', () => {
        const action = {
            type: 'aside/toggleAside',
            payload: true
        }
        let result = reducer(initialState, action)
        expect(result.showAside).toBeTruthy()
        expect(initialState.showAside).toBeFalsy()
    })


    test('should set the current page', () => {
        const action = {
            type: 'set-page',
            payload: 18
        }

        const result = reducer(initialState, action)
        expect(result.currentPage).toBe(18)
        expect(initialState.currentPage).toBe(0)
    })
    
    
    
})
