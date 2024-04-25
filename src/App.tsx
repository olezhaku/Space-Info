import React, { FC, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Apod from "./Pages/Apod/Apod";
import Header from "./components/Header/Header";
import Scroll from "./components/Scroll/Scroll";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./styles/App.css";

const App: FC = () => {
	const [dark, setDark] = useState(false);

	const themeSwitch = () => {
		setDark(!dark);
	};

	const theme = createTheme({
		palette: {
			mode: dark ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<Header themeSwitch={themeSwitch} />

				<Routes>
					<Route path="/apod" element={<Apod />} />
					<Route path="/" element={<Navigate to="/apod" />} />
				</Routes>

				<Scroll />
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
