import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/apod/filterSlice";
import apodSlice from "../features/apod/apodSlice";

const rootReducer = combineReducers({
	apodFilter: filterSlice,
	apod: apodSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
