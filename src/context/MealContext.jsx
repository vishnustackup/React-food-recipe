import { useContext, createContext, useEffect, useReducer } from "react";
import { mealReducer } from "../reducers/MealReducer";
import { startFetchCategories } from "../actions/MealActions";
const initialState = {
  categories: [],
  categoryLoading: false,
  categoryError: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  categoryMealsError: false,
  meals:[],
  mealsLoading:false,
  mealsError:false,
  meal:[],
  mealLoading:false,
  mealError:false
};

const MealContext = createContext({});
export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);
  useEffect(() => {
    startFetchCategories(dispatch)
  },[]);
  return (
    <MealContext.Provider
      value={{
        ...state,
        dispatch,
        startFetchCategories
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealcontext = () => {
  return useContext(MealContext);
};
