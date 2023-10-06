import "./FoodTracking.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postFoodActionCreator,
  deleteFoodActionCreator,
} from "../redux/actions/action";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
export default function FoodTracking() {
  const food = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#242424",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
    closeModal();
  };

  const deleteFoodHandler = (food) => {
    dispatch(deleteFoodActionCreator(food));
  };
  return (
    <div className="food_container">
      <div>
        <button onClick={openModal} className="food_modal_btn">
          Add Food
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Food Modal"
          ariaHideApp={false}
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
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
        </Modal>
      </div>
      <div className="food_card_container">
        {food?.map((food) => {
          return (
            <div className="food_card" key={food?._id}>
              <div className="heading">
                <h3>Food</h3>
                <button onClick={() => deleteFoodHandler(food)}>Delete</button>
              </div>
              <div className="food_latest_data_container">
                <span>Food Name:{food?.foodName}</span>
                <span>Calories:{food?.calories}</span>
                <span>Protein:{food?.protein}</span>
                <span>Carbohydrates:{food?.carbohydrates}</span>
                <span>Fat:{food?.fat}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
