const AppReducer = (state, action) => {
  switch (action.type) {
    case "set-error":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "auto-toggle-goalachieved":
      return {
        ...state,
        items: state.items.map((item) => {
          if (typeof item.steps === "number" && item.steps >= 8000) {
            return { ...item, goalAchived: true };
          } else {
            return { ...item, goalAchived: false };
          }
        }),
      };
    case "valid-activities":
      return {
        ...state,
        items: Array.isArray(action.payload) ? action.payload : [],
        loading: false,
      };
    case "add-activity":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "toggle-goalachieved":
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload && typeof item.flag === "boolean"
        ? { ...item, flag: !item.flag }
        : item
      ),
    };
    case "delete-activity":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "filter-activity":
      return {
        ...state,
        filtered: state.items.filter((item) => item.flag === true),
      };
    default:
      return state;
  }
};

export default AppReducer;