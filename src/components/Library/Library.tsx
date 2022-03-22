import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setActive } from '../../app/trackSlice';

import { playTrack } from '../../utils/helpers';

import { BaseProps } from '../../utils/models/props.model';
import StyledLibrary from './Library.styled';
import LibraryTrack from './LibraryTrack';
import { UtilityButton } from '../shared/Button.styled';
import { MdOutlineClose } from 'react-icons/md';

const Library = ({ audioRef, onToggleLibrary, isLibraryShown }: BaseProps) => {
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
            <div className="aside-header">
                <h2>My Library</h2>
                <UtilityButton onClick={onToggleLibrary} title="Toggle Library Off">
                    <MdOutlineClose />
                </UtilityButton>
            </div>
            <div className="info">
                <p>
                    Looking for more awesome music? Check out{' '}
                    <span>
                        <a href="https://chillhop.com/" target="_blank" rel="noreferrer" title="Chillhop Music">
                            Chillhop.com
                        </a>
                    </span>
                </p>
            </div>
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
