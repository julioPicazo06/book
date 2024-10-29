import { createSlice } from "@reduxjs/toolkit";
import { imgContentWeb } from "data/types"



export interface ContentWeb {
    title : string,
    description : string,
    img : imgContentWeb[]
}

export const initialState: ContentWeb = {
    title : "",
    description : "",
    img : [
        {
            id : 0,
            nombre : "",
            cliente : "",
            tecnica : "",
            liga : "",
            imgProyecto : {
                img : ""
            },
            descripcion : "",
            img : [
                {
                    src : "",
                    alt : ""
                }
            ]
        }
    ] as imgContentWeb[]
}

export const contentWebSlice = createSlice({
    name: 'contentWeb',
    initialState,
    reducers: {
        setContentWeb: (state: ContentWeb, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.img = action.payload.img
        }
    }
});

export const { setContentWeb } = contentWebSlice.actions;
export default contentWebSlice.reducer;


