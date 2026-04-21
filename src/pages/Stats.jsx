import React from "react";
import { useApp } from "../context/TrackerContext";


const Stats = () => {
  const { items } = useApp();
  const totalActivities = items.length;
  const goalAchievedCount = items.filter(a => a.goalAchived === true).length;
  const goalNotAchievedCount = items.filter(a => a.goalAchived === false).length;
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
  const validActivitiesCount = validActivities.length;
  const validGoalAchieved = validActivities.filter(a => a.goalAchived).length;
  const validGoalNotAchieved = validActivities.filter(a => !a.goalAchived).length;

  const efficiencyScores = items
    .filter(a => a && a.workoutMinutes && a.workoutMinutes !== 0)
    .map(a => (a.caloriesBurned / a.workoutMinutes).toFixed(2));

  return (
    <div data-testid="stats-page">
      <h2>Stats</h2>
      <div data-testid="home-summary">
        <strong>Home:</strong> Welcome to the Home Page
      </div>
      <div data-testid="list-summary">
        <strong>List:</strong> Total Activities: {totalActivities}
      </div>
      <div data-testid="display-valid-activities-summary">
        <strong>DisplayValidActivities:</strong> Valid: {validActivitiesCount}, Goal Achieved: {validGoalAchieved}, Goal Not Achieved: {validGoalNotAchieved}
      </div>
      <div data-testid="filter-activities-summary">
        <strong>FilterActivities:</strong> (Filtering logic is dynamic, see FilterActivities page)
      </div>
      <div data-testid="goal-status-update-summary">
        <strong>GoalStatusUpdate:</strong> Goal Achieved: {goalAchievedCount}, Goal Not Achieved: {goalNotAchievedCount}
      </div>
      <div data-testid="activity-detail-view-summary">
        <strong>ActivityDetailView:</strong> Efficiency Scores: {efficiencyScores.join(', ')}
      </div>
    </div>
  );
};

export default Stats;
