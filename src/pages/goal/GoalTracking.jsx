import "./GoalTracking.css";
import React, { useState } from "react";
import { postGoalActionCreator } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export default function GoalTracking() {
  const dispatch = useDispatch();
  const goal = useSelector((state) => state.goal);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
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
    closeModal();
  };

  return (
    <div className="goal_container">
      <div>
        <button onClick={openModal} className="goal_modal_btn">
          Add Goal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Goal Modal"
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
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
        </Modal>
      </div>
      <div className="goal_card_container">
        {goal?.map((goal) => {
          return (
            <div className="goal_card">
              <div className="heading">
                <h3>Goal</h3>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
