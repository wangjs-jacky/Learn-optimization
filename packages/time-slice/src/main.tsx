import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);
