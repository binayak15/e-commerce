import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvdider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvdider>
      <App />
    </ShopContextProvdider>
  </React.StrictMode>
);
