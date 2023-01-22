import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhotos = createAsyncThunk(
    "photos/getPhotos",
    //первый параметр то что мы передали, второй параметр опциональный, можно достать сразу метод dispatch, getState...
    async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100");
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
);

export interface StatePhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface StatePhotos {
    photos?: StatePhoto[]
}

const initialState: StatePhotos | [] = []

// Обрабатываем операции в редукторах
const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        showState(state) {
            console.log(state)
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(getPhotos.pending, (state, action) => {
                console.log('pending')
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                const data: any = action.payload
                // console.log(action.payload)
                state.push(data as never)
            })
            .addCase(getPhotos.rejected, (state, action) => {
                console.log('rejected')
            })
    },
});

const { actions, reducer } = photosSlice;
export const { showState } = actions;
export const photosReducer = reducer