import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { keyHandler } from "../../utils/inputValidation";

import { Grid, Button, ButtonGroup } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

import classes from "./Filter.module.sass";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
	changeDateHandler,
	changeStartDateHandler,
	changeEndDateHandler,
	changeCountHandler,
	today,
	clearHandler,
	sendHandler,
} from "../../features/apod/filterSlice";

const Filter = () => {
	const [disableFields, setDisableFields] = useState({
		date: false,
		startDate: false,
		endDate: false,
		count: false,
	});

	const { values, errors } = useAppSelector((state) => state.apodFilter);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (values.count) {
			setDisableFields({
				...disableFields,
				date: true,
				startDate: true,
				endDate: true,
			});
		} else if (values.date !== today) {
			setDisableFields({
				...disableFields,
				startDate: true,
				endDate: true,
				count: true,
			});
		} else if (values.startDate || values.endDate) {
			setDisableFields({
				...disableFields,
				date: true,
				count: true,
			});
		} else {
			setDisableFields({
				date: false,
				startDate: false,
				endDate: false,
				count: false,
			});
		}
		// eslint-disable-next-line
	}, [values]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.getAttribute("data-id");
		const value = e.target.value;

		switch (inputName) {
			case "date":
				dispatch(changeDateHandler(value));
				break;
			case "startDate":
				dispatch(changeStartDateHandler(value));
				break;
			case "endDate":
				dispatch(changeEndDateHandler(value));
				break;
			case "count":
				dispatch(changeCountHandler(value));
				break;
		}
	};

	const handleSend = () => {
		dispatch(sendHandler());
	};

	const handleClear = () => {
		dispatch(clearHandler());
	};

	return (
		<Grid container className={classes.container}>
			<Grid>
				<Input
					label="Date"
					inputName="date"
					disabled={disableFields.date}
					changeHandler={changeHandler}
					value={values.date}
					error={errors.date}
				/>
			</Grid>

			<Grid>
				<Input
					label="Start date"
					inputName="startDate"
					disabled={disableFields.startDate}
					changeHandler={changeHandler}
					value={values.startDate}
					error={errors.startDate}
				/>
			</Grid>

			<Grid>
				<Input
					label="End date"
					inputName="endDate"
					disabled={disableFields.endDate}
					changeHandler={changeHandler}
					value={values.endDate}
					error={errors.endDate}
				/>
			</Grid>

			<Grid>
				<Input
					type="number"
					label="Count"
					inputName="count"
					disabled={disableFields.count}
					changeHandler={changeHandler}
					keyHandler={keyHandler}
					value={values.count}
					min={1}
				/>
			</Grid>

			<Grid>
				<ButtonGroup
					variant="text"
					aria-label="Basic button group"
					className={classes.buttons}
					color="inherit"
				>
					<Button
						color="secondary"
						onClick={handleSend}
						variant="outlined"
					>
						<Search />
					</Button>
					<Button
						color="error"
						onClick={handleClear}
						variant="outlined"
					>
						<Clear />
					</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	);
};

export default Filter;
