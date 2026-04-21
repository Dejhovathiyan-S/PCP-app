import { useContext } from 'react';
import { TrackerContext } from '../context/TrackerContext';
import { Link } from 'react-router-dom';

export default function RecordItem({ data }) {
  const { dispatchAction } = useContext(TrackerContext);

  return (
    <article data-testid="activity-item">
      <h2>{data.name}</h2>
      <div>Recorded on: {data.date}</div>
      <div>Total Steps: {data.steps}</div>
      <div>Status: {data.goalAchieved ? 'Success' : 'Failed'}</div>
      <button onClick={() => dispatchAction({ type: 'FLIP_GOAL', payload: data.activityId })}>
        Change Status
      </button>
      <Link to={`/activities/${data.activityId}`}>More Info</Link>
    </article>
  );
}