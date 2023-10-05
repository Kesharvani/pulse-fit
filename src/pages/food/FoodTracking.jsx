import "./FoodTracking.css";
import React from "react";

export default function FoodTracking() {
  return (
    <div className="container">
      <h2>Add Food</h2>
      <form action="/submit" method="POST">
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input type="text" id="foodName" name="foodName" required />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input type="number" id="calories" name="calories" required />
        </div>
        <div className="form-group">
          <label htmlFor="protein">Protein (grams):</label>
          <input type="number" id="protein" name="protein" required />
        </div>
        <div className="form-group">
          <label htmlFor="carbohydrates">Carbohydrates (grams):</label>
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fat">Fat (grams):</label>
          <input type="number" id="fat" name="fat" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
