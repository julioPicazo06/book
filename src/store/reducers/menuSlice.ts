import { createSlice } from "@reduxjs/toolkit";



export interface MenuItem {
    title: string;
    img: string;
    color: string;
}

export const menuData: Record<string, MenuItem> = {
    me: {
        title: '',
        img: '',
        color: ''
    },
    frontend: {
        title: '',
        img: '',
        color: ''
    },
    ilustration: {
        title: '',
        img: '',
        color: ''
    },
    contact: {
        title: '',
        img: '',
        color: ''
    }
};

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuData,
    reducers: {
        setMenu: (state: Record<string, MenuItem>, action: { payload: Record<string, MenuItem> }) => {
            state.me.title = action.payload.me.title;
            state.me.img = action.payload.me.img;
            state.me.color = action.payload.me.color;
            state.frontend.title = action.payload.frontend.title;
            state.frontend.img = action.payload.frontend.img;
            state.frontend.color = action.payload.frontend.color;
            state.ilustration.title = action.payload.ilustration.title;
            state.ilustration.img = action.payload.ilustration.img;
            state.ilustration.color = action.payload.ilustration.color;
            state.contact.title = action.payload.contact.title;
            state.contact.img = action.payload.contact.img;
            state.contact.color = action.payload.contact.color;
        }
    }
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;




