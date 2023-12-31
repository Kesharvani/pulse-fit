import "./ExerciseTracking.css";
import React, { useState } from "react";
import {
  postExerciseActionCreator,
  deleteExerciseActionCreator,
} from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
export default function ExerciseTracking() {
  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exercise);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  // on form submit
  const exerciseSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postExerciseActionCreator(exerciseFormObject));
    setExerciseFormObject({
      exerciseName: "",
      duration: "",
      caloriesBurned: "",
    });
    closeModal();
  };

  const exerciseDeleteHandler = (exercise) => {
    dispatch(deleteExerciseActionCreator(exercise));
  };
  return (
    <div className="exercise_container">
      <div>
        <button onClick={openModal} className="exercise_modal_btn">
          Add Exercise
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Exercise Modal"
          ariaHideApp={false}
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
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
        </Modal>
      </div>
      <div className="exercise_card_container">
        {exercise?.map((exercise) => {
          return (
            <div className="exercise_card" key={exercise?._id}>
              <div className="heading">
                <h3>Exercise</h3>
                <button onClick={() => exerciseDeleteHandler(exercise)}>
                  Delete
                </button>
              </div>
              <div className="exercise_latest_data_container">
                <span>Exercise Name:{exercise?.exerciseName}</span>
                <span>Duration:{exercise?.duration}</span>
                <span>Calories Burned:{exercise?.caloriesBurned}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
