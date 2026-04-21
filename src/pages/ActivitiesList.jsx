import { useContext } from 'react';
import { TrackerContext } from '../context/TrackerContext';
import RecordItem from '../components/RecordItem';

export default function ActivitiesList() {
  const { trackerState } = useContext(TrackerContext);

  return (
    <main>
      <h1>All Fitness Records</h1>
      <section>
        {trackerState.records.map(item => (
          <RecordItem key={item.activityId} data={item} />
        ))}
      </section>
    </main>
  );
}