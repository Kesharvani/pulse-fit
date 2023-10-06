export const fetchExerciseActionCreator = () => async (dispatch) => {
  try {
    const exerciseJson = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/exercises"
    );
    const exerciseObject = await exerciseJson.json();
    dispatch({ type: "FETCH_EXCERCISE", payload: exerciseObject.exercise });
  } catch (error) {
    console.error("Error while fetching exercise data:", error);
  }
};

export const fetchFoodActionCreator = () => async (dispatch) => {
  try {
    const foodJson = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/food"
    );
    const foodObject = await foodJson.json();
    dispatch({ type: "FETCH_FOOD", payload: foodObject.food });
  } catch (error) {
    console.error("Error while fetching food data:", error);
  }
};

export const fetchGoalActionCreator = () => async (dispatch) => {
  try {
    const goalJson = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/goals"
    );
    const goalObject = await goalJson.json();
    dispatch({ type: "FETCH_GOAL", payload: goalObject.goal });
  } catch (error) {
    console.error("Error while fetching goal data:", error);
  }
};

export const postFoodActionCreator = (foodData) => async (dispatch) => {
  try {
    const feedFoodData = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      }
    );
    const feedFoodDataObject = await feedFoodData.json();

    dispatch({ type: "ADD_FOOD", payload: feedFoodDataObject.food });
  } catch (error) {
    console.error("Error while feeding food data:", error);
  }
};

export const postGoalActionCreator = (goalData) => async (dispatch) => {
  try {
    const feedGoalData = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/goals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goalData),
      }
    );
    const feedGoalDataObject = await feedGoalData.json();

    dispatch({ type: "ADD_GOAL", payload: feedGoalDataObject.goal });
  } catch (error) {
    console.error("Error while feeding goal data:", error);
  }
};

export const postExerciseActionCreator = (exerciseData) => async (dispatch) => {
  try {
    const feedExerciseData = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseData),
      }
    );
    const feedExerciseDataObject = await feedExerciseData.json();

    dispatch({
      type: "ADD_EXCERCISE",
      payload: feedExerciseDataObject.exercise,
    });
  } catch (error) {
    console.error("Error while feeding exercise data:", error);
  }
};

export const deleteExerciseActionCreator = (exercise) => async (dispatch) => {
  try {
    const feedExerciseData = await fetch(
      `https://assignment17fitnesstracker.allahabad.repl.co/api/exercises/${exercise?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedExerciseDataObject = await feedExerciseData.json();

    dispatch({
      type: "REMOVE_EXERCISE",
      payload: feedExerciseDataObject.exercise,
    });
  } catch (error) {
    console.error("Error while deleting exercise data:", error);
  }
};

export const deleteGoalActionCreator = (goal) => async (dispatch) => {
  try {
    const feedGoalData = await fetch(
      `https://assignment17fitnesstracker.allahabad.repl.co/api/goals/${goal?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedGoalDataObject = await feedGoalData.json();

    dispatch({ type: "REMOVE_GOAL", payload: feedGoalDataObject.goal });
  } catch (error) {
    console.error("Error while deleting goal data:", error);
  }
};

export const deleteFoodActionCreator = (food) => async (dispatch) => {
  try {
    const feedFoodData = await fetch(
      `https://assignment17fitnesstracker.allahabad.repl.co/api/food/${food?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedFoodDataObject = await feedFoodData.json();

    dispatch({ type: "REMOVE_FOOD", payload: feedFoodDataObject.food });
  } catch (error) {
    console.error("Error while deleting food data:", error);
  }
};
