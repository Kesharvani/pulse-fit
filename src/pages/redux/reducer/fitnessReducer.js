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
        exercise: [...state.exercise, action.payload],
      };
    case "ADD_GOAL":
      return {
        ...state,
        goal: [...state.goal, action.payload],
      };
    case "ADD_FOOD":
      return {
        ...state,
        food: [...state.food, action.payload],
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercise: state.exercise?.filter(
          (item) => item?._id !== action.payload?._id
        ),
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        goal: state.goal?.filter((item) => item._id !== action.payload?._id),
      };
    case "REMOVE_FOOD":
      return {
        ...state,
        food: state.food?.filter((item) => item?._id !== action.payload?._id),
      };
    default:
      return { ...state };
  }
};

export default fitnessReducer;
