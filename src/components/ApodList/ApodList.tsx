import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

import ApodItem from "../ApodItem/ApodItem";

import { Typography, Box } from "@mui/material";

import classes from "./ApodList.module.sass";

const ApodList = () => {
	const apods = useAppSelector((state) => state.apod);

	return (
		<Box>
			{apods.data.apods.map((apod, index) => (
				<ApodItem apod={apod} key={index} />
			))}
			{!apods.error[0] && (
				<Typography className={classes.requests}>
					Requests: {apods.data.limit[0]} / {apods.data.limit[1]}
				</Typography>
			)}
		</Box>
	);
};

export default ApodList;
