import "./ExerciseTracking.css";
import React from "react";

export default function ExerciseTracking() {
  return (
    <div class="container">
      <h2>Add Exercise</h2>
      <form action="/submit" method="POST">
        <div class="form-group">
          <label for="exerciseName">Exercise Name:</label>
          <input type="text" id="exerciseName" name="exerciseName" required />
        </div>
        <div class="form-group">
          <label for="duration">Duration (in minutes):</label>
          <input type="number" id="duration" name="duration" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
