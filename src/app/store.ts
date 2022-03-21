import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import trackReducer from './trackSlice';

export const store = configureStore({
    reducer: {
        tracks: trackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
