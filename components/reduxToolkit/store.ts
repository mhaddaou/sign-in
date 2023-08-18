import { configureStore } from "@reduxjs/toolkit";
import fetSlice from "./fetSlice";
import userSlice from "./userSlice";
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "@reduxjs/toolkit";

const saveUserDataMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    const userState = store.getState().user;
    localStorage.setItem("user", JSON.stringify(userState));
    return result;
};

const store = configureStore({
    reducer: {
        users: fetSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saveUserDataMiddleware),
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;