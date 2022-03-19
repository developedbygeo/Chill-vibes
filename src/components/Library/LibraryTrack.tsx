import TrackType from '../../utils/models/track.model';
import { BaseProps } from '../../utils/models/props.model';

type LibraryTrackProps = {
    track: TrackType;
    onTrackSelection: () => void;
} & BaseProps;

const LibraryTrack = ({ track, onTrackSelection }: LibraryTrackProps) => {
    const { cover, title, artist } = track;

    return (
        <>
            <li onClick={onTrackSelection} className={`${track.active ? 'playing' : ''}`} title={`Play ${track.title}`}>
                <img src={cover} alt="song cover" />
                <div>
                    <h4>{title}</h4>
                    <p>{artist}</p>
                </div>
            </li>
            <div className="divider" />
        </>
    );
};

export default LibraryTrack;
