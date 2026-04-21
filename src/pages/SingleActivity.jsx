import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TrackerContext } from '../context/TrackerContext';

export default function SingleActivity() {
  const { id } = useParams();
  const { trackerState } = useContext(TrackerContext);
  
  const currentRecord = trackerState.records.find(r => String(r.activityId) === String(id));

  if (!currentRecord) {
    return <h2>Record missing!</h2>;
  }

  let score = 0;
  if (currentRecord.workoutMinutes > 0) {
    score = (currentRecord.steps / currentRecord.workoutMinutes).toFixed(2);
  }

  return (
    <section>
      <h1>Detail View: {currentRecord.name}</h1>
      <ul>
        <li>ID: {currentRecord.activityId}</li>
        <li>Date: {currentRecord.date}</li>
        <li>Steps Taken: {currentRecord.steps}</li>
        <li>Calories: {currentRecord.caloriesBurned}</li>
        <li>Time (Mins): {currentRecord.workoutMinutes}</li>
        <li>Goal Reached: {currentRecord.goalAchieved ? 'Yes' : 'No'}</li>
        <li>Efficiency (Steps/Min): {score}</li>
      </ul>
    </section>
  );
}