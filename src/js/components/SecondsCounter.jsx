import React from "react";

const SecondsCounter = ({ seconds }) => {
    // 1. Convertimos el número a string 
    // 2. Rellenamos con ceros hasta tener 6 caracteres 
    // 3. Se divide en un array para poder usar .map 
    const digits = seconds.toString().padStart(6, "0").split("");

    return (
        <div className="bigCounter">
            {/* El icono del reloj de Font Awesome */}
            <div className="digit">
                <i className="far fa-clock"></i>
            </div>
            
            {/* Generar un cuadro por cada dígito en el array */}
            {digits.map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
};

export default SecondsCounter;