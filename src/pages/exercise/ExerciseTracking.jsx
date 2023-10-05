import "./ExerciseTracking.css";
import React from "react";

export default function ExerciseTracking() {
  return (
    <div className="container">
      <h2>Add Exercise</h2>
      <form action="/submit" method="POST">
        <div className="form-group">
          <label htmlFor="exerciseName">Exercise Name:</label>
          <input type="text" id="exerciseName" name="exerciseName" required />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in minutes):</label>
          <input type="number" id="duration" name="duration" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
