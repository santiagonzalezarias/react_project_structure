import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
		isLoading: false,
	},

	reducers: {
		setUserList: (state, action) => {
			state.list = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setUserList, setIsLoading } = userSlice.actions;

export default userSlice.reducer;

export const getUsers = (username) => async (dispatch) => {
	const delay = (millis) =>
		new Promise((resolve, reject) => {
			setTimeout(resolve, millis);
		});

	try {
		dispatch(setIsLoading(true));
		const response = await axios.get(
			`https://api.github.com/search/users?q=${username}`
		);
		await delay(1500);
		dispatch(setUserList(response.data.items));
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setIsLoading(false));
	}
};
