import { hydrate, render } from "react-dom";
import App from "./App";
import "./index.css";
// import ReactDOM from "react-dom";
// import React, { lazy, Suspense } from "react";
// import Loader from "./components/Loader";

// //minimum given time it will take to load App component (for showing loading loader everytime)
// const App = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./App")), 1000);
//   });
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <Suspense fallback={<Loader />}>
//       <App />
//     </Suspense>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
