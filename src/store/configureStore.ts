import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { IStoreState as State } from '../reducers/state';
import Reducers from "../reducers/index";

export function configureStore(initialState?: State): Store<State> {
  let middleware = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(Reducers, initialState, middleware);
  return store;
}