import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IPayload {
    id: string
}

interface IFavoriteMealsState {
    ids: string[]
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [] as string[],
    },
    reducers: {
        addFavorite: (state, action: PayloadAction<IPayload>) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action: PayloadAction<IPayload>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorites = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
