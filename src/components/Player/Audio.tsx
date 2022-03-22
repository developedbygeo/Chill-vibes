import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateSongDetails } from '../../app/trackSlice';

type AudioProps = {
    onTrackEnd: () => void;
};

const Audio = React.forwardRef<HTMLAudioElement, AudioProps>(({ onTrackEnd }, ref) => {
    const currentSong = useAppSelector((state) => state.tracks.currentTrack);
    const dispatch = useAppDispatch();

    const timeUpdateHandler = (e: React.BaseSyntheticEvent) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        dispatch(updateSongDetails({ current: +current, duration: +duration }));
    };

    const { audio } = currentSong;

    return (
        <>
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={onTrackEnd}
                ref={ref}
                src={audio}
                title="streaming audio"
                data-testid="audio"
            />
        </>
    );
});

Audio.displayName = 'Audio component';

export default Audio;
