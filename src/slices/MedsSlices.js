import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../utils";

export const MedsSlice = createSlice({
	name: "meds",
	initialState: null,
	reducers: {
		fetchMeds: (state, action) => {
			state = null;
		},
		fetchMedsFulfilled: (state, action) => {
			state = action.payload;
		},
		fetchMedsRejected: (state, action) => {
			state = action.payload;
		},
		fetchMedsCancled: (state, action) => {
			state = { error: Constants.USER_API_CANCLED };
		},
	},
});

export const MedSlice = createSlice({
	name: "med",
	initialState: null,
	reducers: {
		fetchMed: (state, action) => {
			state = null;
		},
		fetchMedFulfilled: (state, action) => {
			state = action.payload;
		},
		fetchMedRejected: (state, action) => {
			state = action.payload;
		},
		fetchMedCancled: (state, action) => {
			state = { error: Constants.USER_API_CANCLED };
		},
	},
});
