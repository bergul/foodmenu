import { createSlice } from "@reduxjs/toolkit";
const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { ids: [] },
    reducers: {
        addFavorite: (state, action) => { state.ids.push(action.payload.id); },
        removeFavorite: (state, action) => { state.ids.splice(state.ids.indexOf((action.payload.id, 1))); },
    },

}); // Add a name, initialState, and reducers properties to the object passed to createSlice

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer; // Export the reducer from the slice