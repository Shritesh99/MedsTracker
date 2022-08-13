import { combineReducers } from "@reduxjs/toolkit";
import { MedsSlice, MedSlice } from "./MedsSlices";

export const rootReducer = combineReducers({
	meds: MedsSlice.reducer,
	med: MedSlice.reducer,
});

export const actions = {
	meds: MedsSlice.actions,
	med: MedSlice.actions,
};
