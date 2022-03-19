import TrackType from '../../utils/models/track.model';
import { BaseProps } from '../../utils/models/props.model';

type LibraryTrackProps = {
    track: TrackType;
} & BaseProps;

const LibraryTrack = ({ track }: LibraryTrackProps) => {
    const { cover, title, artist } = track;

    return (
        <>
            <li>
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
