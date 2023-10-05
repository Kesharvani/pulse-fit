const initialValue = {
  exercise: [],
  goal: [],
  food: [],
};
const fitnessReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCH_EXCERCISE":
      return {
        ...state,
        exercise: [...action.payload],
      };
    case "FETCH_GOAL":
      return {
        ...state,
        goal: [...action.payload],
      };
    case "FETCH_FOOD":
      return {
        ...state,
        food: [...action.payload],
      };
    case "ADD_EXCERCISE":
      return {
        ...state,
      };
    case "ADD_GOAL":
      return {
        ...state,
      };
    case "ADD_FOOD":
      return {
        ...state,
        food: [...state.food, action.payload],
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
      };
    case "REMOVE_GOAL":
      return {
        ...state,
      };
    case "REMOVE_FOOD":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default fitnessReducer;
