import reducer from '../reducers/index'

describe('Testing reducer', () => {
    let initialState

    afterEach(() => {
        console.log(initialState)
    })

    beforeAll(() => {
        initialState = {
            myPokemons: [
                {
                    name: 'Billie',
                    age: 18
                }
            ],
            currentPage: 0,
            allPokemons: [],
            showAside: false
        }
    })

    test('should avoid the duplicate', () => {
        const action = {
            type: 'pokemon/addPokemon',
            payload: {name: 'Billie', age: 18}
        }

        let result = reducer(initialState, action)
        expect(result.myPokemons.length).toBe(1)
        expect(initialState.myPokemons.length).toBe(1)
    })

    test('should add a new pokemon', () => {
        const action = {
            type: 'pokemon/addPokemon',
            payload: {name: 'Eilish', age: 18}
        }
        const result = reducer(initialState, action)
        expect(result.myPokemons.length).toBe(2)
        expect(initialState.myPokemons.length).toBe(1)
    })
    
    test('should delete pokemon', () => {
        const action = {
            type: 'pokemon/deletePokemon',
            payload: 'Billie'
        }
        const result = reducer(initialState, action) 
        expect(result.myPokemons.length).toBe(0)
        expect(initialState.myPokemons.length).toBe(1)
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

    test('should return unchanged state', () => {
        const action = {
            type:'Billie Eilish',
            payload: {
                name: 'Camilo',
                age: 18
            }
        }
        const result = reducer(initialState, action)
        expect(result).toEqual(initialState)
    })


    test('should set all pokemons', () => {
        const action = {
            type: 'set-all-pokemons',
            payload: [1,2,3,4,5]
        }
        const result = reducer(initialState, action)
        expect(result.allPokemons).toHaveLength(5)
        expect(initialState.allPokemons).toHaveLength(0)
    })
    
    
    
    
    
})
