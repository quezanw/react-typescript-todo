import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  tasks: tasksReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));