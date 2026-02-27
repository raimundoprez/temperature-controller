import React from "react";

function TemperatureControls({set_temperature}) {
    return (
        <div className="temperature-controls">
            <button onClick={() => set_temperature(previous_value => previous_value <= 39 ? previous_value + 1 : 40)}>+</button>
            <button onClick={() => set_temperature(previous_value => previous_value >= 1 ? previous_value - 1 : 0)}>-</button>
            <button onClick={() => set_temperature(20.0)}>Reset</button>
        </div>
    );
}

export default TemperatureControls;