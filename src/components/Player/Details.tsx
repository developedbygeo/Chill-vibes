import { useAppSelector } from '../../app/hooks';
import StyledPlayer from './Details.styled';

const Details = () => {
    const currentSong = useAppSelector((state) => state.tracks.currentTrack);
    const isTrackPlaying = useAppSelector((state) => state.tracks.isCurrentTrackPlaying);

    const { title, artist, cover } = currentSong;

    const imageClass = isTrackPlaying ? 'rotate' : '';

    return (
        <StyledPlayer>
            <div className="image-container">
                <img src={cover} alt="song cover" className={imageClass} />
                <div className="inner"></div>
            </div>
            <h2>{title}</h2>
            <h3>{artist}</h3>
        </StyledPlayer>
    );
};

export default Details;
