import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovie } from '../../services/apiMovies';

const initialState = {
  wishlistItems: [],
  status: 'idle',
  error: '',
};

export const fetchMovieWithThunk = createAsyncThunk(
  'wishlist/fetchMovieWithThunk',
  fetchMovie,
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, action) {
      state.wishlistItems.push(action.payload);
    },
    deleteItem(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.imdbID !== action.payload,
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovieWithThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieWithThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.wishlistItems.push(action.payload);
      })
      .addCase(fetchMovieWithThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      }),
});

export const { addItem, deleteItem } = wishlistSlice.actions;

export const getWishList = (state) => state.wishlist.wishlistItems;

export const getCurrentMovieStatusByID = (id) => (state) =>
  state.wishlist.wishlistItems.find((item) => item.imdbID === id)?.imdbID ?? 0;

export default wishlistSlice.reducer;
