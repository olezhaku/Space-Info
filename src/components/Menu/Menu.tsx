import React, { FC } from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Divider,
	Toolbar,
	Link,
} from "@mui/material";

interface MenuProps {
	isOpen: boolean;
	closeHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Menu: FC<MenuProps> = ({ isOpen, closeHandler }) => {
	return (
		<Drawer anchor="left" open={isOpen} onClose={closeHandler}>
			<Toolbar />

			<Divider />

			<List>
				<Link href="/apod" underline="none" color="inherit">
					<ListItem>
						<ListItemText primary="Astronomy Picture of the Day"></ListItemText>
						<ListItemIcon />
					</ListItem>
				</Link>

				<Divider />

				<Link href="/mrp" underline="none" color="inherit">
					<ListItem>
						<ListItemText primary="Mars Rover Photos"></ListItemText>
						<ListItemIcon />
					</ListItem>
				</Link>

				<Divider />

				<Divider />
			</List>
		</Drawer>
	);
};

export default Menu;
