export const FETCH_MEDS = "FETCH_MEDS";
export const fetchMeds = () => ({ type: FETCH_MEDS, payload: null });

export const FETCH_MEDS_FULFILLED = "FETCH_MEDS_FULFILLED";
export const fetchMedsFulfilled = (data) => ({
	type: FETCH_MEDS_FULFILLED,
	payload: data,
});

export const FETCH_MEDS_CANCLED = "FETCH_MEDS_CANCLED";
export const fetchMedsCancled = () => ({
	type: FETCH_MEDS_CANCLED,
	payload: null,
});

export const FETCH_MEDS_REJECTED = "FETCH_MEDS_REJECTED";
export const fetchMedsRejected = (error) => ({
	type: FETCH_MEDS_REJECTED,
	payload: null,
	error: error,
});

export const FETCH_MED = "FETCH_MED";
export const fetchMed = (id) => ({ type: FETCH_MED, payload: id });

export const FETCH_MED_FULFILLED = "FETCH_MED_FULFILLED";
export const fetchMedFulfilled = (data) => ({
	type: FETCH_MED_FULFILLED,
	payload: data,
});

export const FETCH_MED_CANCLED = "FETCH_MEDS_CANCLED";
export const fetchMedCANCLED = () => ({
	type: FETCH_MED_CANCLED,
	payload: null,
});

export const FETCH_MED_REJECTED = "FETCH_MED_REJECTED";
export const fetchMedRejected = (error) => ({
	type: FETCH_MED_REJECTED,
	payload: null,
	error: error,
});
