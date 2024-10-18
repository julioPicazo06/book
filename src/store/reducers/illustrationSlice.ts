import { createSlice } from "@reduxjs/toolkit";

interface imgArray {
    src : string;
    alt : string;
}
 interface imgContentIllustration {
    id : number;
    nombre : string;
    cliente : string;
    tecnica : string;
    imgProyecto : {
        img : string;
    };
    descripcion : string;
    img : imgArray[];
 }

 export interface illustrationContent {
    title : string,
    description : string,
    img : imgContentIllustration[]
}


const initialState: illustrationContent = {
    title : "",
    description : "",
    img : [] as imgContentIllustration[]
}

const illustrationSlice = createSlice({
    name: 'illustration',
    initialState,
    reducers: {
        setIllustration: (state:illustrationContent, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.img = action.payload.img
        }
    }
});


export const { setIllustration } = illustrationSlice.actions;
export default illustrationSlice.reducer;

