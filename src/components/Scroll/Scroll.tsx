import React from "react";

import { Box, Fab, Fade, useScrollTrigger, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./Scroll.module.sass";

const Scroll = () => {
	const theme = useTheme();

	return (
		<Fade in={useScrollTrigger()}>
			<Box
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className={classes.scroll}
			>
				<Fab style={{ background: theme.palette.background.default }}>
					<KeyboardArrowUpIcon color="secondary" />
				</Fab>
			</Box>
		</Fade>
	);
};

export default Scroll;
