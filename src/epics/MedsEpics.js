import { ofType } from "redux-observable";
import { map, mergeMap, takeUntil } from "rxjs";
import { ajax } from "rxjs/ajax";
import { MedsAction } from "../actions";
// TODO: Add Api
export const fetchMedsEpic = (action$) =>
	action$.pipe(
		ofType(MedsAction.FETCH_MEDS),
		mergeMap((action) =>
			ajax.getJSON(``).pipe(
				map((response) => MedsAction.fetchMedsFulfilled(response)),
				takeUntil(
					action$.pipe(ofType(MedsAction.FETCH_MEDS_CANCLED))
				)
			)
		)
	);

export const fetchMedEpic = (action$) =>
	action$.pipe(
		ofType(MedsAction.FETCH_MED),
		mergeMap((action) =>
			ajax.getJSON(``).pipe(
				map((response) => MedsAction.fetchMedFulfilled(response)),
				takeUntil(
					action$.pipe(ofType(MedsAction.FETCH_MED_CANCLED))
				)
			)
		)
	);
