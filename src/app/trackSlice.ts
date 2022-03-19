import { createSlice } from '@reduxjs/toolkit';

import data from '../utils/data';

const cartInit = {
    data,
    currentTrack: data[0],
    isCurrentTrackPlaying: false,
    songDetails: {
        current: 0,
        duration: 0,
    },
};

const trackSlice = createSlice({
    name: 'tracks',
    initialState: cartInit,
    reducers: {
        setActive: (state, action) => {
            const selectedTrack = state.data.find((track) => track.id === action.payload);
            state.data.forEach((track) => (track.active = false));
            if (selectedTrack) {
                selectedTrack.active = true;
                state.currentTrack = selectedTrack;
            }
        },
        setIsPlaying: (state) => {
            state.isCurrentTrackPlaying = !state.isCurrentTrackPlaying;
        },
        updateSongDetails: (state, action) => {
            state.songDetails.current = action.payload.current;
            if (action.payload.duration) {
                state.songDetails.duration = action.payload.duration;
            }
        },
        skipSong: (state, action) => {
            const currentIndex = state.data.findIndex((track) => track.id === state.currentTrack.id);
            const nextTrack =
                action.payload === 'forward'
                    ? data[(currentIndex + 1) % data.length]
                    : data[(currentIndex - 1) % data.length] || data[0];
            const dataTrack = state.data.find((track) => track.id === nextTrack.id);
            state.data.forEach((track) => (track.active = false));
            if (dataTrack) dataTrack.active = true;
            state.currentTrack = nextTrack;
        },
    },
});

export const { setActive, setIsPlaying, updateSongDetails, skipSong } = trackSlice.actions;

export default trackSlice.reducer;
