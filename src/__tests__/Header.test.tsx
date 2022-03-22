import { render, screen } from '../setupTests';
import Header from '../components/Header/Header';

describe('<Header/>', () => {
    beforeEach(() => {
        render(<Header />);
    });
    test('logo', () => {
        expect(screen.getByRole('heading', { name: /^chill vibes$/i })).toBeInTheDocument();
    });
    test('nav', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    test('header', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('library button', () => {
        expect(screen.getByRole('button', { name: /^library$/i })).toBeInTheDocument();
    });
});
