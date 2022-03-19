import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setActive } from '../../app/trackSlice';

import { playTrack } from '../../utils/helpers';

import { BaseProps } from '../../utils/models/props.model';
import StyledLibrary from './Library.styled';
import LibraryTrack from './LibraryTrack';

const Library = ({ audioRef }: BaseProps) => {
    const isLibraryShown = useAppSelector((state) => state.ui.showLibrary);
    const allTracks = useAppSelector((state) => state.tracks.data);
    const isTrackPlaying = useAppSelector((state) => state.tracks.isCurrentTrackPlaying);

    const dispatch = useAppDispatch();

    const selectTrackHandler = (id: string) => {
        dispatch(setActive(id));
        if (audioRef && audioRef.current) {
            playTrack(isTrackPlaying, audioRef);
        }
    };

    return (
        <StyledLibrary className={`${isLibraryShown ? 'visible' : ''}`}>
            <h2>My Library</h2>
            <ul>
                {allTracks.map((track) => (
                    <LibraryTrack
                        track={track}
                        key={track.id}
                        onTrackSelection={selectTrackHandler.bind(null, track.id)}
                    />
                ))}
            </ul>
        </StyledLibrary>
    );
};

export default Library;
