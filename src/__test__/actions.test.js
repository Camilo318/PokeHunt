import * as actions from '../actions/index'
import thunkMiddleware from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunkMiddleware])


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
})