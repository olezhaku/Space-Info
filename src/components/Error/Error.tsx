import React, { FC } from "react";
import errorImage from "../../img/error.jpg";

import { Grid, Card, Typography, CardContent, CardMedia } from "@mui/material";

import classes from "./Error.module.sass";

interface ErrorProps {
	limit: number[] | string[];
}

const Error: FC<ErrorProps> = ({ limit }) => {
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
							{limit[0]}
						</Typography>

						<Typography variant="body2" color="text.secondary">
							{limit[1]}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default Error;
