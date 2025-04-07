import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TabState {
    activeTab: string;
    openFiles: string[];
}

const initialState: TabState = {
    activeTab: '',
    openFiles: ['Tabs.tsx', '_Sidebar.scss'],
};

const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        closeTab: (state, action: PayloadAction<string>) => {
            state.openFiles = state.openFiles.filter((file: string) => file !== action.payload);
        },
        activateTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
        },
        createTab: (state, action: PayloadAction<string>) => {
            state.openFiles.push(action.payload);
        },
    },
});

export const { closeTab, activateTab, createTab } = tabSlice.actions;
export const getActiveTab = (state: RootState) => state.tabs.activeTab;
export const getOpenFiles = (state: RootState) => state.tabs.openFiles;
export default tabSlice.reducer;
