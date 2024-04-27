import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchApod } from "../../features/apod/fetchApod";

import Filter from "../../components/FIlter/Filter";
import ApodList from "../../components/ApodList/ApodList";
import Error from "../../components/Error/Error";

import { Container, LinearProgress } from "@mui/material";

import classes from "./Apod.module.sass";

const Apod = () => {
	const { data, error, isLoading } = useAppSelector((state) => state.apod);
	const dispatch = useAppDispatch();
	const send = useAppSelector((state) => state.apodFilter.send);

	useEffect(() => {
		dispatch(fetchApod());
		// eslint-disable-next-line
	}, [send]);

	return (
		<Container className={classes.container}>
			<Filter />

			{isLoading && (
				<LinearProgress className={classes.loader} color="secondary" />
			)}

			{error.length > 0 && <Error />}

			{data && <ApodList />}
		</Container>
	);
};

export default Apod;
