import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import { useTheme } from "./ThemeContext";
import RunningExercise from "./components/RunningExercise";

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);
  const { theme, toggleTheme } = useTheme();
//copying the excercises from the sample
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "running" },
    { name: "Sit Ups", type: "repetition" }
  ];

  let content;
  if (!currentExercise) {
    content = (
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
} else if (currentExercise.type === "repetition") {
  content = <RepetitionExercise name={currentExercise.name} />;
} else if (currentExercise.type === "duration") {
  content = <DurationExercise name={currentExercise.name} />;
} else if (currentExercise.type === "running") {
  content = <RunningExercise name={currentExercise.name} />;
}
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "12px",
          right: "16px",
          zIndex: 1000,
        }}
      >
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      {content}
    </div>
  );
}

export default App;