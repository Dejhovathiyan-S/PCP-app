import React from "react";
import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const ActivityDetailView = () => {
  const { id } = useParams();
  const { items, loading } = useApp();
  if (loading) return <div>Loading...</div>;
  const activity = items.find((a, idx) => String(a.id || idx) === id);
  if (!activity) return <div>Activity not found</div>;
  let efficiency = "-";
  if (activity.workoutMinutes && activity.workoutMinutes !== 0) {
    efficiency = (activity.caloriesBurned / activity.workoutMinutes).toFixed(2);
  } else {
    efficiency = "N/A";
  }
  return (
    <div>
      <ActivityItem activity={activity} />
      <div>Efficiency Score: {efficiency}</div>
    </div>
  );
};

export default ActivityDetailView;
