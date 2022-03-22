import userEvent from '@testing-library/user-event';
import { render, screen } from '../setupTests';
import Library from '../components/Library/Library';

describe('<Library/>', () => {
    beforeEach(() => {
        render(<Library />);
    });

    test('library renders', () => {
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    test('library header renders', () => {
        expect(screen.getByText(/my library/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /^toggle library off$/i })).toBeInTheDocument();
    });
    test('library renders all 15 items based on initial state', () => {
        expect(screen.getAllByRole('listitem', { name: /play/i, exact: false })).toHaveLength(15);
    });
    test('link to chillhop', () => {
        expect(screen.getByRole('link', { name: /chillhop music/i, exact: false })).toBeInTheDocument();
    });
    test('button removes class', () => {
        userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('complementary')).not.toHaveClass('visible');
    });
});
