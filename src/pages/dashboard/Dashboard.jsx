import "./Dashboard.css";
import React from "react";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const data = useSelector((state) => state.food);
  console.log(data);
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
