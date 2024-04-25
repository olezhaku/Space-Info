import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormErrors, IFormValues } from "../../types/types";
import { inputValidation } from "../../utils/inputValidation";

interface ValuesState {
	values: IFormValues;
	errors: IFormErrors;
	send: IFormValues;
}

export const today = new Date()
	.toLocaleDateString()
	.split(".")
	.reverse()
	.join("-");

const initialState: ValuesState = {
	values: {
		date: today,
		startDate: "",
		endDate: "",
		count: "",
	},
	errors: {
		date: false,
		startDate: false,
		endDate: false,
	},
	send: {
		date: today,
		startDate: "",
		endDate: "",
		count: "",
	},
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeDateHandler(state, action: PayloadAction<string>) {
			state.values.date = action.payload;
			state.errors.date = inputValidation(action.payload);
		},

		changeStartDateHandler(state, action: PayloadAction<string>) {
			state.values.startDate = action.payload;
			state.errors.startDate = inputValidation(action.payload);
		},

		changeEndDateHandler(state, action: PayloadAction<string>) {
			state.values.endDate = action.payload;
			state.errors.endDate = inputValidation(action.payload);
		},

		changeCountHandler(state, action: PayloadAction<string>) {
			state.values.count = action.payload;
		},
		sendHandler(state) {
			if (
				!state.errors.date &&
				!state.errors.startDate &&
				!state.errors.endDate
			) {
				state.send = {
					date: state.values.date,
					startDate: state.values.startDate,
					endDate: state.values.endDate,
					count: state.values.count,
				};
			}
		},
		clearHandler(state) {
			state.values = {
				date: today,
				startDate: "",
				endDate: "",
				count: "",
			};
			state.errors = {
				date: false,
				startDate: false,
				endDate: false,
			};
		},
	},
});

export const {
	changeDateHandler,
	changeStartDateHandler,
	changeEndDateHandler,
	changeCountHandler,
	sendHandler,
	clearHandler,
} = filterSlice.actions;

export default filterSlice.reducer;
