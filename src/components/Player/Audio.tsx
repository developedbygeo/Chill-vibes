import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateSongDetails } from '../../app/trackSlice';

const Audio = React.forwardRef<HTMLAudioElement>((props, ref) => {
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
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={ref} src={audio} />
        </>
    );
});

Audio.displayName = 'Audio component';

export default Audio;
