import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <body> */}
    <CartProvider>
      <App />
    </CartProvider>
    {/* </body> */}
  </React.StrictMode>
);
