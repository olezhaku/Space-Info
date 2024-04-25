import axios from "axios";
import { IApod } from "../types/types";

export default async function fetchApod(
	setApods: React.Dispatch<React.SetStateAction<IApod[]>>,
	setLimit: React.Dispatch<React.SetStateAction<number[] | string[]>>,
	setLoader: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<React.SetStateAction<boolean>>,
	filterValues: string
) {
	const apiKey = "ppaoZpc5ci0ycvYXqDLiR1l9u9SqgV1hqALMT802&thumbs";
	const link = "planetary/apod?";

	try {
		setLoader(true);
		setApods([]);

		const response = await axios.get<IApod[]>(
			`https://api.nasa.gov/${link}api_key=${apiKey}&${filterValues}`
		);

		const limit = parseInt(response.headers["x-ratelimit-limit"]);
		const remaining = parseInt(response.headers["x-ratelimit-remaining"]);

		setLimit([remaining, limit]);

		setApods(
			Array.isArray(response.data) ? response.data : [response.data]
		);
		setLoader(false);
	} catch (error: any) {
		console.log(error);

		setError(false);

		let code: string;
		let message: string;

		if (error.response.data.error) {
			code = error.response.data.error["code"];
			message = error.response.data.error["message"];
			setLimit([code, message]);
		} else if (error.code) {
			setLimit([error.code, error.message]);
		}
	}
}
