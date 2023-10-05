import "./GoalTracking.css";
import React, { useState } from "react";
import { postGoalActionCreator } from "../redux/actions/action";
import { useDispatch } from "react-redux";
export default function GoalTracking() {
  const dispatch = useDispatch();
  const [goalFormObject, setGoalFormObject] = useState({
    goalName: "",
    goalDescription: "",
    targetDate: "",
    targetCalories: "",
    status: "",
  });

  const inputGoalHandler = (e) => {
    const { name, value } = e.target;
    setGoalFormObject((prev) => ({ ...prev, [name]: value }));
  };

  const goalSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postGoalActionCreator(goalFormObject));
    setGoalFormObject({
      goalName: "",
      goalDescription: "",
      targetDate: "",
      targetCalories: "",
      status: "",
    });
  };
  console.log(goalFormObject);
  return (
    <div className="container">
      <h2>Add Goal</h2>
      <form onSubmit={goalSubmitHandler}>
        <div className="form-group">
          <label htmlFor="goalName">Goal Name:</label>
          <input
            type="text"
            id="goalName"
            name="goalName"
            required
            value={goalFormObject.goalName}
            onChange={inputGoalHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="goalDescription">Goal Description:</label>
          <textarea
            id="goalDescription"
            name="goalDescription"
            rows="4"
            value={goalFormObject.goalDescription}
            onChange={inputGoalHandler}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="targetDate">Target Date:</label>
          <input
            type="date"
            id="targetDate"
            name="targetDate"
            required
            value={goalFormObject.targetDate}
            onChange={inputGoalHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetCalories">Target Calories:</label>
          <input
            type="number"
            id="targetCalories"
            name="targetCalories"
            required
            value={goalFormObject.targetCalories}
            onChange={inputGoalHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            required
            value={goalFormObject.status}
            onChange={inputGoalHandler}
          >
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
