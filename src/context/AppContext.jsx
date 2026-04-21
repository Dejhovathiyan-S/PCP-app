import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "../reducer/AppReducer";
import { getTokenInfo, getMovies } from "../services/Api";

const initialState = {
  items: [],
  filtered: [],
  loading: true,
  error: null,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
  const res = await getTokenInfo();
        const data = await getMovies(res.token, "/private/Dataset B - Fitness Tracker Activities");
  dispatch({ type: "valid-activities", payload: data });
      } catch (error) {
        dispatch({ type: "valid-activities", payload: [] }); 
        dispatch({ type: "set-error", payload: "Failed to load activities. Please try again later." });
      }
    };
    fetchData();
  }, []);

  const addItem = (item) => dispatch({ type: "add-activity", payload: item });
  const deleteItem = (id) => dispatch({ type: "delete-activity", payload: id });
  const toggleFlag = (id) => dispatch({ type: "toggle-goalachieved", payload: id });
  const setFilter = () => dispatch({ type: "filter-activity" });

  const autoToggleGoalAchieved = () => dispatch({ type: "auto-toggle-goalachieved" });

  const totalActivities = state.items.length;
  const goalAchivedCount = state.items.filter(a => a.goalAchived === true).length;
  if (typeof window !== 'undefined') {
    window.appstate = { totalActivities, goalAchivedCount };
  }

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        filtered: state.filtered,
        loading: state.loading,
        error: state.error,
        addActivity: addItem,
        deleteActivity: deleteItem,
        toggleGoalAchieved: toggleFlag,
        filterActivity: setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);