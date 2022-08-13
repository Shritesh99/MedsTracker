import {
	configureStore,
	applyMiddleware,
	compose,
	createStore,
} from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./slices";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const configureAppStore = () => {
	const initialState = {}; // TODO: Prefetch State
	const middlewares = [epicMiddleware];
	const enhance = compose(applyMiddleware(...middlewares));
	const store = createStore(rootReducer, initialState, enhance);
	epicMiddleware.run(rootEpic);
	return store;
};

export const store = configureAppStore();
