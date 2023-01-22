import { configureStore } from "@reduxjs/toolkit";
import { photosReducer } from "./slices/photoSlice";

export const store = configureStore({
    reducer: {
        photos: photosReducer,
    }
});

export type AppDispatch = typeof store.dispatch