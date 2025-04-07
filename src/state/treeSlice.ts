import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TreeState {
    activeFile: string;
}

const initialState: TreeState = {
    activeFile: '',
};

const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        openFile(state, action: PayloadAction<string>) {
            state.activeFile = action.payload;
        },
    },
});

export const { openFile } = treeSlice.actions;
export const getOpenFile = (state: RootState) => state.tree.activeFile;
export default treeSlice.reducer;
