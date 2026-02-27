import React, {useState, useEffect} from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureControls from "./TemperatureControls";
import HistoryList from "./HistoryList";

export default function App() {
  const [temperature, set_temperature] = useState(20.0);
  const [history, set_history] = useState([]);
  const [first_render, set_first_render] = useState(true);

  useEffect(() => {
    if (first_render) {
      set_first_render(false);
      return;
    }

    setTimeout(() => {
      set_history(previous_history => {
          const new_history = [...previous_history];

          const now = new Date();
          const now_str = now.toLocaleTimeString("es-ES");

          new_history.unshift({time: now_str, temperature: temperature});
          return new_history;
      });
    }, 250);
  }, [temperature]);

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature}/>
      <TemperatureControls set_temperature={set_temperature}/>
      <HistoryList history={history}/>
    </div>
  )
}