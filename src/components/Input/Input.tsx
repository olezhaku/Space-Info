import React, { FC } from "react";
import { TextField } from "@mui/material";

interface InputProps {
	label: string;
	value: string | number;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled: boolean;
	inputName: string;
	error?: boolean;
	type?: string;
	defaultValue?: string;
	min?: number;
	keyHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
	type,
	label,
	defaultValue,
	value,
	disabled,
	changeHandler,
	error,
	min,
	keyHandler,
	inputName,
}) => {
	return (
		<TextField
			id="outlined-number"
			variant="outlined"
			defaultValue={defaultValue}
			label={label}
			type={type}
			inputProps={{ min: min, "data-id": inputName }}
			value={value}
			onChange={changeHandler}
			disabled={disabled}
			error={error}
			onKeyDown={keyHandler}
			color="secondary"
		/>
	);
};

export default Input;
