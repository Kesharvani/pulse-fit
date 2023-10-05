import "./FoodTracking.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFoodActionCreator } from "../redux/actions/action";
export default function FoodTracking() {
  const data = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const [formObject, setFormObject] = useState({
    foodName: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormObject((pre) => ({ ...pre, [name]: value }));
  };
  const handleFoodSubmit = (e) => {
    e.preventDefault();
    dispatch(postFoodActionCreator(formObject));
    setFormObject({
      foodName: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    });
  };
  return (
    <div className="container">
      <h2>Add Food</h2>
      <form onSubmit={handleFoodSubmit}>
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            required
            onChange={inputHandler}
            value={formObject.foodName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            required
            onChange={inputHandler}
            value={formObject.calories}
          />
        </div>
        <div className="form-group">
          <label htmlFor="protein">Protein (grams):</label>
          <input
            type="number"
            id="protein"
            name="protein"
            required
            onChange={inputHandler}
            value={formObject.protein}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carbohydrates">Carbohydrates (grams):</label>
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            required
            onChange={inputHandler}
            value={formObject.carbohydrates}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fat">Fat (grams):</label>
          <input
            type="number"
            id="fat"
            name="fat"
            required
            onChange={inputHandler}
            value={formObject.fat}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
