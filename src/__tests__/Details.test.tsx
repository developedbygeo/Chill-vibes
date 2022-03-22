import { render, screen } from '../setupTests';
import Details from '../components/Player/Details';

describe('<Library/>', () => {
    beforeEach(() => {
        render(<Details />);
    });

    test('image', () => {
        const image = screen.getByRole('img', { name: /current song cover/i });
        expect(image).toHaveAttribute('src');
    });

    test('song info', () => {
        const details = screen.getAllByRole('heading');
        expect(details).toHaveLength(2);
    });
});
