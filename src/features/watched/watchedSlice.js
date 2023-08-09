import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchedItems: [],
};

const watchedSlice = createSlice({
  name: 'watched',
  initialState,
  reducers: {
    addItem(state, action) {
      state.watchedItems.push(action.payload);
    },
  },
});

export const { addItem } = watchedSlice.actions;

export const getWatchedList = (state) => state.watched.watchedItems;

export default watchedSlice.reducer;
