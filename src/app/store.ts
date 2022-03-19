import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import trackReducer from './trackSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        tracks: trackReducer,
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
