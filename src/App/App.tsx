import React from "react";
import { AppUI } from "./AppUI";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppUI />
      </Provider>
    </>
  );
}

export default App;
