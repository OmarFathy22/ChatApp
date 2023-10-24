import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./Favorites"; 
export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});