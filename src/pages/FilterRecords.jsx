import { useContext, useState } from 'react';
import { TrackerContext } from '../context/TrackerContext';
import RecordItem from '../components/RecordItem';

export default function FilterRecords() {
  const { trackerState } = useContext(TrackerContext);
  const [threshold, setThreshold] = useState('');

  const matchedRecords = trackerState.records.filter(
    r => r.steps >= Number(threshold || 0)
  );

  return (
    <main>
      <h1>Filter by Steps</h1>
      <input
        type="number"
        data-testid="filter-input"
        placeholder="Enter minimum steps"
        value={threshold}
        onChange={e => setThreshold(e.target.value)}
      />
      <div>
        {matchedRecords.map(item => (
          <RecordItem key={item.activityId} data={item} />
        ))}
      </div>
    </main>
  );
}