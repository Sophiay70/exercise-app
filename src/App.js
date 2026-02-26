import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);
//copying the excercises from the sample
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Sit Ups", type: "repetition" }
  ];

  if (!currentExercise) {
    return (
      <div>
        <h1>Exercise Tracker</h1>
        <p>Select an excercise!</p>

        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setCurrentExercise(exercise)}
          >
            {exercise.name}
          </button>
        ))}
      </div>
    );
  }

  if (currentExercise.type === "repetition") {
    return (
      <RepetitionExercise name={currentExercise.name} />
    );
  }

  if (currentExercise.type === "duration") {
    return (
      <DurationExercise name={currentExercise.name} />
    );
  }
}

export default App;