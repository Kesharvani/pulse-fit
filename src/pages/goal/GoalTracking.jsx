import "./GoalTracking.css";
import React from "react";

export default function GoalTracking() {
  return (
    <div class="container">
      <h2>Add Goal</h2>
      <form action="/submit" method="POST">
        <div class="form-group">
          <label for="goalName">Goal Name:</label>
          <input type="text" id="goalName" name="goalName" required />
        </div>
        <div class="form-group">
          <label for="goalDescription">Goal Description:</label>
          <textarea
            id="goalDescription"
            name="goalDescription"
            rows="4"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="targetDate">Target Date:</label>
          <input type="date" id="targetDate" name="targetDate" required />
        </div>
        <div class="form-group">
          <label for="targetCalories">Target Calories:</label>
          <input
            type="number"
            id="targetCalories"
            name="targetCalories"
            required
          />
        </div>
        <div class="form-group">
          <label for="status">Status:</label>
          <select id="status" name="status" required>
            <option value="In Progress">In Progress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
