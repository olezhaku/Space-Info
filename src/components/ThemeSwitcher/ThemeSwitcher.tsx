import React, { FC } from "react";

import { Switch, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

import classes from "./ThemeSwitcher.module.sass";

interface ThemeSwitcherProps {
	className?: string;
	clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, clickHandler }) => {
	return (
		<Box className={className}>
			<LightMode className={classes.light} color="action" />

			<Switch color="secondary" onClick={clickHandler} />

			<DarkMode className={classes.dark} color="secondary" />
		</Box>
	);
};

export default ThemeSwitcher;
