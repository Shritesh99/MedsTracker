import { MedsAction } from "../actions";

export const Meds = (state = {}, action) => {
	switch (action.type) {
		case MedsAction.FETCH_MEDS_FULFILLED:
			return { ...state, payload: action.payload };
		case MedsAction.FETCH_MEDS_REJECTED:
			return { ...state, payload: action.error };
		default:
			return state;
	}
};

export const Med = (state = {}, action) => {
	switch (action.type) {
		case MedsAction.FETCH_MED_FULFILLED:
			return { ...state, payload: action.payload };
		case MedsAction.FETCH_MED_REJECTED:
			return { ...state, payload: action.error };
		default:
			return state;
	}
};
