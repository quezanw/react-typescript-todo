import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { InitialState } from "./reducers/state";
// import { IStoreState as State } from "./reducers/state";
import { configureStore } from "./store/configureStore";
import TodoComponent from "./components/TodoComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const store = configureStore(InitialState);
render(
  <Provider store={store}>
    <TodoComponent/>
  </Provider>,
  document.getElementById("root")
);