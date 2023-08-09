import { configureStore } from '@reduxjs/toolkit';

import watchedReducer from './features/watched/watchedSlice';
import wishlistReducer from './features/wishlist/wishlistSlice';

const store = configureStore({
  reducer: {
    watched: watchedReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
