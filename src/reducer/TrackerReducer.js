export const defaultState = {
  records: []
};

export function TrackerReducer(state, action) {
  if (action.type === 'LOAD_DATA') {
    return { ...state, records: action.payload };
  }
  
  if (action.type === 'FLIP_GOAL') {
    const updatedRecords = state.records.map(record => {
      if (record.activityId === action.payload) {
        return { ...record, goalAchieved: !record.goalAchieved };
      }
      return record;
    });
    return { ...state, records: updatedRecords };
  }
  
  return state;
}