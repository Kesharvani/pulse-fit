import "./Dashboard.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExerciseActionCreator,
  fetchFoodActionCreator,
  fetchGoalActionCreator,
} from "../redux/actions/action";

export default function Dashboard() {
  const exercise = useSelector((state) => state.exercise);
  const food = useSelector((state) => state.food);
  const goal = useSelector((state) => state.goal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dashboard useEffect is called");
    dispatch(fetchExerciseActionCreator());
    dispatch(fetchFoodActionCreator());
    dispatch(fetchGoalActionCreator());
  }, [dispatch]);
  return (
    <div className="dashboard_container">
      <h2>Summary</h2>
      <div className="card_container">
        <div className="card">
          <div className="heading">
            <h3>Exercise</h3>
            <hr />
          </div>
          <div></div>
        </div>
        <div className="card">
          <div className="heading_food">
            <h3>Food</h3>
            <hr />
          </div>
          <div></div>
        </div>
        <div className="card">
          <div className="heading_goal">
            <h3>Goal</h3>
            <hr />
          </div>
          <div></div>
        </div>
      </div>
      <div className="fitness_summary">
        <h4>Total Calories Burned:{45}</h4>
        <h4>Total Calories Consumed:{45}</h4>
        <h4>Total Calories Goal:{45}</h4>
        <h4>Remaining Calories to Goal:{45}</h4>
      </div>
    </div>
  );
}
