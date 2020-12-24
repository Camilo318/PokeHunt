import * as actions from '../actions/index'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk])


describe('Testing actions creator', () => {
    test('should return the delete action', () => {  
        const payload = 18
        const expected = {
            type: 'pokemon/deletePokemon',
            payload
        }
        expect(actions.deletePokemon(payload)).toEqual(expected)
    })

    test('should return the toggle action', () => {
        const payload = { selected: 18 }
        const expected = {
            type: 'set-page',
            payload
        }
        expect(actions.setCurrentPage(payload)).toEqual(expected)
    })


    test('should run thunk and dispatch', async () => {
        expect.assertions(2)
        const store = mockStore()
        const mockFetch = jest.fn()
            .mockResolvedValueOnce('Billie')
            .mockResolvedValueOnce('Eilish')

        await store.dispatch(actions.fetchPokemons(
            'Billie',
            mockFetch,
            mockFetch
        ))
        const [action] = store.getActions()
        console.log(action)
        const expected = {
            type: 'set-all-pokemons',
            payload: 'Eilish'
        }
        expect(action).toEqual(expected)
        expect(mockFetch.mock.calls.length).toBe(2)
    })
    
})