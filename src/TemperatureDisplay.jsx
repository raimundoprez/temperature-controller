import React from "react";

function renderTemperature(temperature) {
    let message;

    if (temperature < 15)
        message = "¡Hace frío!";
    else if (temperature >= 15 && temperature <= 25)
        message = "Temperatura agradable";
    else
        message = "¡Hace calor!";

    return (
        <>
            <p>{temperature} ºC</p>
            <p>{message}</p>
        </>
    );
}

function TemperatureDisplay({temperature}) {
    return (
        <div className="temperature-display">
            {renderTemperature(temperature)}
        </div>
    );
}

export default TemperatureDisplay;