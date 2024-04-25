import React, { FC, useState } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import Menu from "../Menu/Menu";

import classes from "./Header.module.sass";

interface HeaderProps {
	themeSwitch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<HeaderProps> = ({ themeSwitch }) => {
	const [open, setOpen] = useState(false);

	const openMenu = (e: React.MouseEvent<HTMLElement>) => {
		setOpen(true);
	};

	return (
		<AppBar position="static" color="default" className={classes.header}>
			<Toolbar className={classes.nav}>
				<IconButton color="inherit" onClick={openMenu}>
					<MenuIcon />
				</IconButton>

				<Typography variant="h6" component="span">
					Space Info
				</Typography>

				<ThemeSwitcher
					className={classes.switcher}
					clickHandler={themeSwitch}
				/>
			</Toolbar>

			<Menu
				isOpen={open}
				closeHandler={() => {
					setOpen(false);
				}}
			/>
		</AppBar>
	);
};

export default Header;
