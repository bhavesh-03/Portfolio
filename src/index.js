import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
   
      <App />
   
  </BrowserRouter>
);
