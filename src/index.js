import React from "react";
import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";

import App from "./App";
import store from "./data/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import ErrorBoundary from "./utility/ErrorBoundary";
import "./utility/ErrorBoundary.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-boundary">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const myErrorHandler = (error, info) => {
  // Do something with the error
  // E.g. log to an error logging client here
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
