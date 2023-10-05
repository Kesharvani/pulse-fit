import "./FoodTracking.css";
import React from "react";

export default function FoodTracking() {
  return (
    <div class="container">
      <h2>Add Food</h2>
      <form action="/submit" method="POST">
        <div class="form-group">
          <label for="foodName">Food Name:</label>
          <input type="text" id="foodName" name="foodName" required />
        </div>
        <div class="form-group">
          <label for="calories">Calories:</label>
          <input type="number" id="calories" name="calories" required />
        </div>
        <div class="form-group">
          <label for="protein">Protein (grams):</label>
          <input type="number" id="protein" name="protein" required />
        </div>
        <div class="form-group">
          <label for="carbohydrates">Carbohydrates (grams):</label>
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            required
          />
        </div>
        <div class="form-group">
          <label for="fat">Fat (grams):</label>
          <input type="number" id="fat" name="fat" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
