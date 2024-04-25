export const inputValidation = (value: string) => {
	const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
	return !regex.test(value);
};

export const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
	if (!/^[0-9]*$/.test(e.key) && e.key !== "Backspace") {
		e.preventDefault();
	}
};
