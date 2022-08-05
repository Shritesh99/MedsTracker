import { combineReducers } from "redux";
import * as MedsReducer from "./MedsReducer";

export default combineReducers({
	meds: MedsReducer.Meds,
	med: MedsReducer.Med,
});
