import { configureStore } from "@reduxjs/toolkit";
import fetSlice from "./fetSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        users: fetSlice,
        user: userSlice,
    },
    
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
