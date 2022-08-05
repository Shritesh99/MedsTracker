import { combineEpics } from "redux-observable";
import { fetchMedEpic, fetchMedsEpic } from "./MedsEpics";

export default combineEpics(fetchMedEpic, fetchMedsEpic);
