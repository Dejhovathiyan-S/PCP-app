import { useContext, useEffect } from 'react';
import { TrackerContext } from '../context/TrackerContext';

export default function Analytics() {
  const { trackerState } = useContext(TrackerContext);

  const totalActivities = trackerState.records.length;
  const goalAchieved = trackerState.records.filter(r => r.goalAchieved === true).length;
  const goalNotAchieved = totalActivities - goalAchieved;

  useEffect(() => {
    window.appState = {
      totalActivities,
      goalAchieved,
      goalNotAchieved
    };
  }, [totalActivities, goalAchieved, goalNotAchieved]);

  return (
    <main>
      <h1>Dashboard Statistics</h1>
      <p>Total Records: <strong data-testid="total-activities">{totalActivities}</strong></p>
      <p>Goals Met: <strong data-testid="goal-achieved">{goalAchieved}</strong></p>
      <p>Goals Missed: <strong data-testid="goal-not-achieved">{goalNotAchieved}</strong></p>
    </main>
  );
}