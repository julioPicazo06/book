import { createSlice } from "@reduxjs/toolkit";
import { ContentSkills } from "data/imgContent"



const initialState: ContentSkills = {
    title: '',
    description: '',
    imgSkills: []
}


export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkills: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.imgSkills = action.payload.imgSkills;
        }
    }
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;