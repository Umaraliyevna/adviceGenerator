import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/redux.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistGate persistor={persistedStore}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </StrictMode>
);
