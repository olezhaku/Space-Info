import React, { FC, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Apod from "./Pages/Apod/Apod";
import Mrp from "./Pages/Mrp/Mrp";
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
			<BrowserRouter basename={"/space-info"}>
				<Header themeSwitch={themeSwitch} />

				<Routes>
					<Route path="/" element={<Apod />} />
					<Route path="/apod" element={<Apod />} />
					<Route path="/mrp" element={<Mrp />} />
				</Routes>

				<Scroll />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
