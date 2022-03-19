import React, { useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setIsPlaying } from '../../app/trackSlice';

import { formatTime } from '../../utils/helpers';

import { SecondaryButton } from '../shared/Button.styled';
import { MdArrowBackIos, MdArrowForwardIos, MdPause, MdPlayArrow } from 'react-icons/md';
import StyledControls from './Controls.styled';

const Controls = () => {
    const [songData, setSongData] = useState({ current: 0, duration: 0 });
    const currentSong = useAppSelector((state) => state.tracks.currentTrack);
    const isTrackPlaying = useAppSelector((state) => state.tracks.isCurrentTrackPlaying);
    const dispatch = useAppDispatch();
    const audioRef = useRef<HTMLAudioElement>(null);
    const { audio } = currentSong;

    const playButton = isTrackPlaying ? <MdPause className="small-icon" /> : <MdPlayArrow className="small-icon" />;

    const playHandler = () => {
        dispatch(setIsPlaying());
        if (audioRef.current && isTrackPlaying) {
            audioRef.current.pause();
        }
        if (audioRef.current && !isTrackPlaying) {
            audioRef.current.play();
        }
    };

    const timeUpdateHandler = (e: React.BaseSyntheticEvent) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongData({ ...songData, current, duration });
    };

    const changeTimeHandler = (e: React.BaseSyntheticEvent) => {
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value;
        }
        setSongData({ ...songData, current: e.target.value });
    };

    return (
        <StyledControls>
            <div className="time">
                <p>{formatTime(+songData.current)}</p>
                <input
                    min={0}
                    max={songData.duration}
                    value={songData.current}
                    onChange={changeTimeHandler}
                    type="range"
                    name="song-duration"
                    id="time"
                />
                <p>{formatTime(+songData.duration)}</p>
            </div>
            <div className="ctrl">
                <SecondaryButton>
                    <MdArrowBackIos />
                </SecondaryButton>
                <SecondaryButton onClick={playHandler}>{playButton}</SecondaryButton>
                <SecondaryButton>
                    <MdArrowForwardIos />
                </SecondaryButton>
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={audio} />
        </StyledControls>
    );
};

export default Controls;
