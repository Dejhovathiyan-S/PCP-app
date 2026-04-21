const AppReducer = (state, action) => {
  switch (action.type) {
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
      console.warn("Unknown action:", action.type);
      return state;
  }
};

export default AppReducer;