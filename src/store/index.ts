import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/apod/filterSlice";

const rootReducer = combineReducers({ apod: filterReducer });

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
