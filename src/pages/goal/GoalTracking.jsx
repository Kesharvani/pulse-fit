import "./GoalTracking.css";
import React from "react";

export default function GoalTracking() {
  return (
    <div className="container">
      <h2>Add Goal</h2>
      <form action="/submit" method="POST">
        <div className="form-group">
          <label htmlFor="goalName">Goal Name:</label>
          <input type="text" id="goalName" name="goalName" required />
        </div>
        <div className="form-group">
          <label htmlFor="goalDescription">Goal Description:</label>
          <textarea
            id="goalDescription"
            name="goalDescription"
            rows="4"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="targetDate">Target Date:</label>
          <input type="date" id="targetDate" name="targetDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="targetCalories">Target Calories:</label>
          <input
            type="number"
            id="targetCalories"
            name="targetCalories"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
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
