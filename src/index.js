import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./Context/filter-context";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <Router>
        <App />
      </Router>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
