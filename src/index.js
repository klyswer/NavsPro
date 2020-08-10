import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
// import { FirebaseAppProvider } from "reactfire";
// import firebaseConfig from "./firebase-config";

import { Provider } from "react-redux";
import store from "./store/store";
import {getAllProducts} from './store/actionCreators'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

store.dispatch(getAllProducts())

ReactDOM.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Cargando App. . .'}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>,
  // </FirebaseAppProvider>,
  document.getElementById("root")
);

