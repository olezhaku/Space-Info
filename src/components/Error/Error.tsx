import React from "react";
import errorImage from "../../img/error.jpg";

import { Grid, Card, Typography, CardContent, CardMedia } from "@mui/material";

import classes from "./Error.module.sass";
import { useAppSelector } from "../../hooks/useAppSelector";

const Error = () => {
	const error = useAppSelector((state) => state.apod.error);

	return (
		<Card className={classes.container}>
			<Grid container>
				<Grid item xs={12} md={6} lg={7}>
					<CardMedia
						className={classes.image}
						component="img"
						image={errorImage}
					/>
				</Grid>

				<Grid item xs={12} md={6} lg={5}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{error[0]}
						</Typography>

						<Typography variant="body2" color="text.secondary">
							{error[1]}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default Error;
