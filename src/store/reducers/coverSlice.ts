import { createSlice } from "@reduxjs/toolkit";
import { getCoverData } from "data/coverData";

interface CoverState {
    title:string;
    statement:string;
    img:string;
}

const initialState:CoverState = {
    title: getCoverData('en').title,
    statement: getCoverData('en').statement,
    img: getCoverData('en').img
}

const coverSlice = createSlice({
    name: 'cover',
    initialState,
    reducers: {
        setCover: (state, action) => {
            state.title = action.payload.title;
            state.statement = action.payload.statement;
            state.img = action.payload.img;
        }
    }
})


export const { setCover } = coverSlice.actions; 
export default coverSlice.reducer;