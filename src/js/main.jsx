import React from "react";
import ReactDOM from "react-dom/client";

// Importamos los estilos y el componente
import "../styles/index.css";
import SecondsCounter from "./components/SecondsCounter.jsx";

// Seleccionamos el div con id "root" de HTML

const root = ReactDOM.createRoot(document.querySelector("#root"));

let counter = 0;

// El motor: suma 1 al contador y vuelve a renderizar cada 1000ms
setInterval(() => {
    root.render(<SecondsCounter seconds={counter} />);
    counter++;
}, 1000);