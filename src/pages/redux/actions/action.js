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
