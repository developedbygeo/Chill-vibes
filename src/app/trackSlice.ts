import { createSlice } from '@reduxjs/toolkit';

import data from '../utils/data';

const cartInit = {
    data,
    currentTrack: data[0],
    isCurrentTrackPlaying: false,
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
    },
});

export const { setActive, setIsPlaying } = trackSlice.actions;

export default trackSlice.reducer;
