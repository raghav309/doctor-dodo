import { configureStore } from '@reduxjs/toolkit';
import treeReducers from './treeSlice';
import tabReducers from './tabSlice';

export const store = configureStore({
    reducer: {
        tabs: tabReducers,
        tree: treeReducers,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
