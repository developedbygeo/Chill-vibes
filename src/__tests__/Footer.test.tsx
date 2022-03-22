import { render, screen } from '../setupTests';
import Footer from '../components/Footer/Footer';

describe('<Library/>', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    test('footer renders', () => {
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test('link', () => {
        const link = screen.getByRole('link', { name: /github profile/i });
        expect(link).toHaveAttribute('href');
        expect(link).toHaveAttribute('rel');
        expect(link).toHaveAttribute('target');
        expect(link).toHaveAttribute('title');
        expect(link).toHaveTextContent('developedbygeo');
    });
});
