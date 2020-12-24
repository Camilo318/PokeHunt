import Pokemon from '../components/Pokemon'
import { shallow } from 'enzyme'


describe('Testing snapshots', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Pokemon />)
        expect(wrapper).toMatchSnapshot()
    })
    
})