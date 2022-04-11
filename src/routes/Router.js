import React from "react";
import { Route, Routes } from "react-router-dom";

//Import Views
import Home from "../views/Home/Home";
import ListUsers from "../views/ListUsers/ListUsers";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users" element={<ListUsers />} />
		</Routes>
	);
}
