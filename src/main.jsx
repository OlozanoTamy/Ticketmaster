import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//createRoot recibe todo el documento como argumento
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode sirve para que envie advertencias si algo se hace mal
//Este es el archivo mas importante

//Proyecto que se va a ir construllendo en el curso buscador de eventos
