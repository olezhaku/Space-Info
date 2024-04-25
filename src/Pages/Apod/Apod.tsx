import React, { useEffect, useState } from "react";
import { IApod } from "../../types/types";

import fetchApod from "../../api/fetchData";
import Filter from "../../components/FIlter/Filter";
import ApodItem from "../../components/ApodItem/ApodItem";
import Error from "../../components/Error/Error";

import { Container, LinearProgress, Typography } from "@mui/material";

import classes from "./Apod.module.sass";

import { useAppSelector } from "../../hooks/useAppSelector";
import { today } from "../../features/apod/filterSlice";

const Apod = () => {
	const [apods, setApods] = useState<IApod[]>([]);
	const [limit, setLimit] = useState<number[] | string[]>([]);
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(true);

	const send = useAppSelector((state) => state.apod.send);

	let filterValues = "";
	if (send) {
		if (send.count) {
			filterValues = `count=${send.count}`;
		} else if (send.date !== today) {
			filterValues = `date=${send.date}`;
		} else if (send.startDate && !send.endDate) {
			filterValues = `start_date=${send.startDate}`;
		} else if (send.startDate && send.endDate) {
			filterValues = `start_date=${send.startDate}&end_date=${send.endDate}`;
		}
	}

	useEffect(() => {
		fetchApod(setApods, setLimit, setLoader, setError, filterValues);
		// eslint-disable-next-line
	}, [send]);

	//error
	function typeOfLimit() {
		return typeof limit[0];
	}

	return (
		<Container className={classes.container}>
			<Filter />

			{loader && error ? (
				<LinearProgress className={classes.loader} color="secondary" />
			) : (
				apods.map((apod, index) => <ApodItem apod={apod} key={index} />)
			)}

			{typeOfLimit() === "string" ? (
				<Error limit={limit} />
			) : (
				<Typography className={classes.requests}>
					Requests: {limit[0]} / {limit[1]}
				</Typography>
			)}
		</Container>
	);
};

export default Apod;
