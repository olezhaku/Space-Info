export interface IApod {
	copyright: string;
	date: string;
	explanation: string;
	hdurl: string;
	media_type: string;
	service_version: string;
	title: string;
	url: string;
}

export interface IFormValues {
	date: string;
	startDate: string;
	endDate: string;
	count: number | string;
}

export interface IFormErrors {
	date: boolean;
	startDate: boolean;
	endDate: boolean;
}
