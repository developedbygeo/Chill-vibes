import { useAppSelector } from '../../app/hooks';

import StyledLibrary from './Library.styled';
import LibraryTrack from './LibraryTrack';

const Library = () => {
    const allTracks = useAppSelector((state) => state.tracks.data);

    return (
        <StyledLibrary>
            <h2>Library</h2>
            <ul>
                {allTracks.map((track) => (
                    <LibraryTrack track={track} key={track.id} />
                ))}
            </ul>
        </StyledLibrary>
    );
};

export default Library;
