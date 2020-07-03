import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";

import { Provider } from "react-redux";
import store from "./store/store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Cargando App. . .'}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
// serviceWorker.unregister();
