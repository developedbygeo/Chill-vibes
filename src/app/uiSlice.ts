import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { showLibrary: false },
    reducers: {
        toggleLibrary: (state) => {
            state.showLibrary = !state.showLibrary;
        },
    },
});

export const { toggleLibrary } = uiSlice.actions;

export default uiSlice.reducer;
