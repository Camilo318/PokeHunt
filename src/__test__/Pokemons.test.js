import Pokemon from '../components/Pokemon'
import { fireEvent, render } from '@testing-library/react'


describe('Testing snapshots', () => {
    test('should render without crashing', () => {
        const mockShowDetails = jes.fn()
        render(<Pokemon />)
        fireEvent.click(<Pokemon />)

        expect(mockShowDetails).toHaveBeenCalled(1)
    })
})