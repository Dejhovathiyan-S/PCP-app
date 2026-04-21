import { useEffect, useContext } from 'react';
import { TrackerProvider, TrackerContext } from './context/TrackerContext';
import ApplicationRouter from './router/ApplicationRouter';
import { fetchToken, fetchFitnessData } from './services/Api';

function MainApp() {
  const { dispatchAction } = useContext(TrackerContext);

  useEffect(() => {
    async function loadInitialData() {
      try {
        const tokenRes = await fetchToken("E0323042", "setB", "572981");
        const responseData = await fetchFitnessData(tokenRes.token, tokenRes.dataUrl);
        
        console.log("SERVER RESPONSE:", responseData);
        
        let extractedData = [];
        
        if (Array.isArray(responseData)) {
          extractedData = responseData;
        } else if (responseData?.data && Array.isArray(responseData.data.activities)) {
          extractedData = responseData.data.activities;
        } else if (responseData?.activities && Array.isArray(responseData.activities)) {
          extractedData = responseData.activities;
        } else if (responseData?.data && Array.isArray(responseData.data)) {
          extractedData = responseData.data;
        } else if (typeof responseData === 'object' && responseData !== null) {
          const firstLevelArray = Object.values(responseData).find(val => Array.isArray(val));
          if (firstLevelArray) {
            extractedData = firstLevelArray;
          } else if (responseData.data && typeof responseData.data === 'object') {
            const nestedArray = Object.values(responseData.data).find(val => Array.isArray(val));
            if (nestedArray) {
              extractedData = nestedArray;
            }
          }
        }

        const cleanedData = extractedData
          .filter(obj => obj && obj.activityId)
          .map(obj => {
            return {
              ...obj,
              name: obj.name ? obj.name : "Unknown",
              date: obj.date ? obj.date : "No date",
              steps: parseInt(obj.steps) || 0,
              caloriesBurned: parseInt(obj.caloriesBurned) || 0,
              workoutMinutes: parseInt(obj.workoutMinutes) || 0,
              goalAchieved: obj.goalAchieved === true || String(obj.goalAchieved).toLowerCase() === "true"
            };
          });

        dispatchAction({ type: 'LOAD_DATA', payload: cleanedData });
      } catch (err) {
        console.error(err);
      }
    }
    loadInitialData();
  }, [dispatchAction]);

  return <ApplicationRouter />;
}

export default function App() {
  return (
    <TrackerProvider>
      <MainApp />
    </TrackerProvider>
  );
}