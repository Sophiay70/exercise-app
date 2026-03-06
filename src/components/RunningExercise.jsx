import React, { useState } from "react";

function RunningExercise() {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const time = new Date().toLocaleTimeString();
    setLaps([...laps, time]);
  };

  return (
    <div>
      <h2>Running Exercise</h2>

      <button onClick={recordLap}>
        Record Lap
      </button>

      <h3>Laps</h3>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;