import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    String(minutes).padStart(2, "0") + ":" +
    String(remainingSeconds).padStart(2, "0");

  return (
    <div>
      <h2>{name}</h2>

      <p>{formattedTime}</p>

      <button onClick={() => setIsRunning(true)}>
        Start
      </button>

      <button onClick={() => {
        setIsRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;