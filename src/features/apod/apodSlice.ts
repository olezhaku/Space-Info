import { createSlice } from "@reduxjs/toolkit";
import { IApod } from "../../types/types";
import { fetchApod } from "./fetchApod";

interface ApodState {
	data: {
		apods: IApod[];
		limit: string[];
	};
	isLoading: boolean;
	error: string[];
}

const initialState: ApodState = {
	data: {
		apods: [],
		limit: [],
	},
	isLoading: false,
	error: [],
};

const apodSlice = createSlice({
	name: "apod",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchApod.pending, (state) => {
				state.data = { apods: [], limit: [] };
				state.isLoading = true;
			})
			.addCase(fetchApod.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = [];
				state.data = action.payload;
			})
			.addCase(fetchApod.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string[];
			});
	},
});

export default apodSlice.reducer;
