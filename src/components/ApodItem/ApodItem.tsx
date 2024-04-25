import React, { FC } from "react";
import { IApod } from "../../types/types";

import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import classes from "./ApodIrem.module.sass";

interface ApodItemProps {
	apod: IApod;
}

const ApodItem: FC<ApodItemProps> = ({ apod }) => {
	return (
		<Card className={classes.container}>
			<Grid container>
				<Grid item xs={12} md={6} lg={7}>
					<a href={apod.hdurl} target="_blank" rel="noreferrer">
						{apod.media_type === "image" ? (
							<CardMedia
								className={classes.image}
								component="img"
								image={apod.url}
								alt={apod.title}
							/>
						) : (
							<iframe
								className={classes.video}
								title={apod.title}
								src={apod.url}
							/>
						)}
					</a>
				</Grid>

				<Grid item xs={12} md={6} lg={5}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{apod.title}
						</Typography>

						<Typography variant="body2" color="text.secondary">
							{apod.explanation}
						</Typography>

						<Typography>{apod.copyright}</Typography>
						<Typography>{apod.date}</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default ApodItem;
