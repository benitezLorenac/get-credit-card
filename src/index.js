import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditoContextProvider from "./contexts/credito_context";

ReactDOM.render(
  <React.StrictMode>
    <CreditoContextProvider>
      <App />
    </CreditoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
