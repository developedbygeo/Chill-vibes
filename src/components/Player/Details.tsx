import { useAppSelector } from '../../app/hooks';
import StyledDetails from './Details.styled';

const Details = () => {
    const currentSong = useAppSelector((state) => state.tracks.currentTrack);
    const isTrackPlaying = useAppSelector((state) => state.tracks.isCurrentTrackPlaying);

    const { title, artist, cover } = currentSong;

    const imageClass = isTrackPlaying ? 'rotate' : '';

    return (
        <StyledDetails>
            <div className="image-container">
                <img src={cover} alt="current song cover" className={imageClass} />
                <div className="inner"></div>
            </div>
            <h2 data-testid="song-title">{title}</h2>
            <h3>{artist}</h3>
        </StyledDetails>
    );
};

export default Details;
