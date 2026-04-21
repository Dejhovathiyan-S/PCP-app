import React from "react";
import { useApp } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const DisplayValidActivities = () => {
  const { items, loading } = useApp();
  if (loading) return <div>Loading...</div>;
  const validActivities = items.filter(
    (a) =>
      a &&
      typeof a.steps === "number" &&
      a.steps > 0 &&
      typeof a.caloriesBurned === "number" &&
      a.caloriesBurned > 0 &&
      typeof a.workoutMinutes === "number" &&
      a.workoutMinutes > 0 &&
      typeof a.goalAchived === "boolean"
  );
  return (
    <div>
      <div data-testid="total-activites">Total: {validActivities.length}</div>
      <div data-testid="goal-achived">Goal Achieved: {validActivities.filter(a => a.goalAchived).length}</div>
      <div data-testid="goal-not-achived">Goal Not Achieved: {validActivities.filter(a => !a.goalAchived).length}</div>
      {validActivities.map((activity, idx) => (
        <ActivityItem key={idx} activity={activity} />
      ))}
    </div>
  );
};

export default DisplayValidActivities;
