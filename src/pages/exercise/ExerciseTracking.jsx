import "./ExerciseTracking.css";
import React, { useState } from "react";
import { postExerciseActionCreator } from "../redux/actions/action";
import { useDispatch } from "react-redux";
export default function ExerciseTracking() {
  const dispatch = useDispatch();
  const [exerciseFormObject, setExerciseFormObject] = useState({
    exerciseName: "",
    duration: "",
    caloriesBurned: "",
  });

  // handling the input and putting it on the state
  const inputExerciseHandler = (e) => {
    const { name, value } = e.target;
    setExerciseFormObject((prev) => ({ ...prev, [name]: value }));
  };

  // on form submit
  const exerciseSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postExerciseActionCreator(exerciseFormObject));
    setExerciseFormObject({
      exerciseName: "",
      duration: "",
      caloriesBurned: "",
    });
  };

  return (
    <div className="container">
      <h2>Add Exercise</h2>
      <form onSubmit={exerciseSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exerciseName">Exercise Name:</label>
          <input
            type="text"
            id="exerciseName"
            name="exerciseName"
            required
            value={exerciseFormObject.exerciseName}
            onChange={inputExerciseHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in minutes):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            required
            value={exerciseFormObject.duration}
            onChange={inputExerciseHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="caloriesBurned">caloriesBurned</label>
          <input
            type="number"
            id="caloriesBurned"
            name="caloriesBurned"
            required
            value={exerciseFormObject.caloriesBurned}
            onChange={inputExerciseHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
