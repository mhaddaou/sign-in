import { configureStore } from "@reduxjs/toolkit";
import fetSlice from "./fetSlice";


const store = configureStore({
    reducer : {
        users : fetSlice
    }
})

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;