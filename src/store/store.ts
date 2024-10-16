
import { configureStore } from "@reduxjs/toolkit";
import coverReducer from "./reducers/coverSlice";
import formReducer from "./reducers/formSlice";
import historyReducer from "./reducers/historySlice";
import menuReducer from "./reducers/menuSlice";

const stores = configureStore({
    reducer : {
        cover: coverReducer,
        form: formReducer,
        history: historyReducer,
        menu : menuReducer
    }
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;

export default stores;