import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setIsPlaying, skipSong, updateSongDetails } from '../../app/trackSlice';

import Audio from './Audio';

import { playTrack } from '../../utils/helpers';
import { BaseProps } from '../../utils/models/props.model';
import { formatTime } from '../../utils/helpers';
import CustomSlider from '../shared/Slider/CustomSlider';
import { SecondaryButton } from '../shared/Button.styled';
import { MdArrowBackIos, MdArrowForwardIos, MdPause, MdPlayArrow } from 'react-icons/md';
import StyledControls from './Controls.styled';

const Controls = ({ audioRef }: BaseProps) => {
    const isTrackPlaying = useAppSelector((state) => state.tracks.isCurrentTrackPlaying);
    const songDetails = useAppSelector((state) => state.tracks.songDetails);
    const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
    const dispatch = useAppDispatch();

    const progressPercentage = (songDetails.current / songDetails.duration) * 100;
    const audioRefAvailable = audioRef && audioRef.current;

    const playButton = isTrackPlaying ? <MdPause className="small-icon" /> : <MdPlayArrow className="small-icon" />;

    const playHandler = () => {
        dispatch(setIsPlaying());
        if (audioRefAvailable && isTrackPlaying) {
            audioRef.current.pause();
        }
        if (audioRefAvailable && !isTrackPlaying) {
            audioRef.current.play();
        }
    };

    const changeInputTimeHandler = (e: React.BaseSyntheticEvent) => {
        if (audioRefAvailable) {
            audioRef.current.currentTime = e.target.value;
        }
        dispatch(updateSongDetails({ current: +e.target.value }));
    };

    const skipSongHandler = (direction: string) => {
        dispatch(skipSong(direction));
        if (audioRef) {
            playTrack(isTrackPlaying, audioRef);
        }
    };

    const trackEndHandler = () => {
        dispatch(skipSong('forward'));
        if (audioRef) {
            setTimeout(() => {
                playTrack(isTrackPlaying, audioRef);
            });
        }
    };

    return (
        <>
            <StyledControls>
                <div className="time">
                    <p>{songDetails.current ? formatTime(+songDetails.current) : '0:00'}</p>
                    <CustomSlider
                        max={songDetails.duration}
                        value={songDetails.current}
                        progress={progressPercentage}
                        gradient={currentTrack.colors}
                        onChange={changeInputTimeHandler}
                    />
                    <p>{songDetails.duration ? formatTime(+songDetails.duration) : '0:00'}</p>
                </div>
                <div className="ctrl">
                    <SecondaryButton onClick={skipSongHandler.bind(null, 'back')} title="Previous Track">
                        <MdArrowBackIos />
                    </SecondaryButton>
                    <SecondaryButton
                        className={isTrackPlaying ? 'pause' : 'play'}
                        onClick={playHandler}
                        title={isTrackPlaying ? 'Pause' : 'Play'}
                    >
                        {playButton}
                    </SecondaryButton>
                    <SecondaryButton onClick={skipSongHandler.bind(null, 'forward')} title="Next Track">
                        <MdArrowForwardIos />
                    </SecondaryButton>
                </div>
            </StyledControls>
            <Audio ref={audioRef} onTrackEnd={trackEndHandler} />
        </>
    );
};

export default Controls;
