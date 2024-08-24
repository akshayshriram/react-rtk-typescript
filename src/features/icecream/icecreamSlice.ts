import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    numOfIceCream: number
}

const initialState: initialState = {
    numOfIceCream: 20,
};

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--;
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCream += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCream--;
        });
    },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;