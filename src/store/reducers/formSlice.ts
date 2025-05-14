import { createSlice } from "@reduxjs/toolkit";

export interface formData {

    pageTitle: string;
    title: string;
    name: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    button: string;
    success: string;
    img: string;
}


const initialState:formData = {
    email: '',
    message: '',
    name: '',
    subject: '',
    lastName: '',
    pageTitle: '',
    title: '',
    button: '',
    success: '',
    img: ''
}

const formSlice = createSlice({
    name : 'form',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.message = action.payload.message;
            state.subject = action.payload.subject;
            state.lastName = action.payload.lastName;
            state.pageTitle = action.payload.pageTitle;
            state.title = action.payload.title;
            state.button = action.payload.button;
            state.success = action.payload.success;
            state.img = action.payload.img;
        }
    }
})

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
