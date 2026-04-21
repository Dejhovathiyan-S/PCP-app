import { createContext, useReducer } from 'react';
import { TrackerReducer, defaultState } from '../reducer/TrackerReducer';

export const TrackerContext = createContext();

export function TrackerProvider({ children }) {
  const [trackerState, dispatchAction] = useReducer(TrackerReducer, defaultState);

  return (
    <TrackerContext.Provider value={{ trackerState, dispatchAction }}>
      {children}
    </TrackerContext.Provider>
  );
}