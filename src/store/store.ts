
import { configureStore } from "@reduxjs/toolkit";
import coverReducer from "./reducers/coverSlice";
import formReducer from "./reducers/formSlice";
import historyReducer from "./reducers/historySlice";
import menuReducer from "./reducers/menuSlice";
import aboutReducer from "./reducers/aboutSlice";
import skillsReducer from "./reducers/skillsSlice";
import illustrationSlice from "./reducers/illustrationSlice";
import contentWebSlice from "./reducers/contentWebSlice";

const stores = configureStore({
    reducer : {
        cover: coverReducer,
        form: formReducer,
        history: historyReducer,
        menu : menuReducer,
        about : aboutReducer,
        skills : skillsReducer,
        illustration : illustrationSlice,
        contentWeb : contentWebSlice
    }
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;

export default stores;