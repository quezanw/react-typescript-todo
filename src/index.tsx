import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { InitialState } from "./reducers/state";
// import { IStoreState as State } from "./reducers/state";
import { configureStore } from "./store/configureStore";
import TodoComponent from "./components/TodoComponent";

const store = configureStore(InitialState);
render(
  <Provider store={store}>
    <TodoComponent/>
  </Provider>,
  document.getElementById("root")
);