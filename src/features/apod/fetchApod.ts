import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IApod } from "../../types/types";
import { RootState } from "../../store";

const apiKey = "ppaoZpc5ci0ycvYXqDLiR1l9u9SqgV1hqALMT802&thumbs";
const link = "planetary/apod?";
let filterValues = "";

export const fetchApod = createAsyncThunk(
	"apod/fetchApod",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState() as RootState;
		const send = state.apodFilter.send;

		if (send) {
			if (send.count) {
				filterValues = `count=${send.count}`;
			} else if (send.date) {
				filterValues = `date=${send.date}`;
			} else if (send.startDate && !send.endDate) {
				filterValues = `start_date=${send.startDate}`;
			} else if (send.startDate && send.endDate) {
				filterValues = `start_date=${send.startDate}&end_date=${send.endDate}`;
			}
		}

		try {
			const response = await axios.get<IApod[]>(
				`https://api.nasa.gov/${link}api_key=${apiKey}&${filterValues}`
			);

			const limit = response.headers["x-ratelimit-limit"];
			const remaining = response.headers["x-ratelimit-remaining"];

			return {
				apods: Array.isArray(response.data)
					? response.data
					: [response.data],
				limit: [remaining, limit],
			};
		} catch (error: any) {
			return thunkAPI.rejectWithValue([error.code, error.message]);
		}
	}
);
