import userEvent from '@testing-library/user-event';
import { render, screen } from '../setupTests';
import Controls from '../components/Player/Controls';

describe('<Controls/>', () => {
    beforeEach(() => {
        render(<Controls />);
    });
    test('buttons render', () => {
        expect(screen.getByRole('button', { name: /previous/i, exact: false })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /play/i, exact: false })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /next/i, exact: false })).toBeInTheDocument();
    });
    test('slider render', () => {
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    test('audio render', () => {
        expect(screen.getByTestId('audio')).toBeInTheDocument();
    });
    test('button on play - class and svg', () => {
        const playButton = screen.getByRole('button', { name: /play/i });
        userEvent;
        userEvent.click(playButton);
        expect(playButton).toHaveClass('pause');
    });
});
