import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState : {
    favorites : []
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload.id);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },

})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;