import React from "react";

let key_id = 0;

function renderHistory(history) {
    return history.map(registry => {
        return <li key={key_id++}>{`[${registry.time}] => ${registry.temperature} ºC`}</li>;
    });
}

function HistoryList({history}) {
    return (
        <ul className="history-list">
            {renderHistory(history)}
        </ul>
    );
}

export default HistoryList;