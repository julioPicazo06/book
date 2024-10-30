import { createSlice } from "@reduxjs/toolkit";

interface formData {
    name: string;
    email: string;
    message: string;
    subject : string;
    lastName: string;
}

const initialState:formData = {
    email: '',
    message: '',
    name: '',
    subject: '',
    lastName: ''
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
        }
    }
})

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
