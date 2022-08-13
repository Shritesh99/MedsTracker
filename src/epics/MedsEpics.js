import { ofType } from "redux-observable";
import { map, mergeMap, takeUntil } from "rxjs";
import { ajax } from "rxjs/ajax";
import { actions } from "../slices";

// TODO: Add Api
export const fetchMedsEpic = (action$) =>
	action$.pipe(
		ofType(actions.meds.fetchMeds.match),
		mergeMap((action) =>
			ajax.getJSON(``).pipe(
				map((response) =>
					actions.meds.fetchMedsFulfilled(response)
				),
				takeUntil(
					action$.pipe(
						ofType(actions.meds.fetchMedsCancled.match)
					)
				)
			)
		)
	);

export const fetchMedEpic = (action$) =>
	action$.pipe(
		ofType(actions.med.fetchMed.match),
		mergeMap((action) =>
			ajax.getJSON(``).pipe(
				map((response) => actions.med.fetchMedFulfilled(response)),
				takeUntil(
					action$.pipe(ofType(actions.med.fetchMedCancled.match))
				)
			)
		)
	);
