import { createSlice } from "@reduxjs/toolkit";
import { AboutData } from "data/aboutData";


export interface Links {
    title: string;
    url: string;
    icon: string;
}


export const initialState: AboutData = {
    title: '',
    img: '',
    text: '',
    links: [] as Links[]
}

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAbout: (state, action) => {
            state.title = action.payload.title;
            state.img = action.payload.img;
            state.text = action.payload.text;
            state.links = action.payload.links;
        }
    }
});

export const { setAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
 