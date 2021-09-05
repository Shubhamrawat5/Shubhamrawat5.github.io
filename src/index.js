import ReactDOM from "react-dom";
import "./index.css";
import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader";

//minimum given time it will take to load App component (for showing loading loader everytime)
const App = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App")), 2300);
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
