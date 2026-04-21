import React from "react";

const ActivityItem = ({ activity }) => {
  const { name, date, steps, caloriesBurned, workoutMinutes, goalAchived } = activity;
  return (
    <div data-testid="activity-item">
      <div>Name: {name ? name : "unknown"}</div>
      <div>Date: {date ? date : "no date"}</div>
      <div>Steps: {steps}</div>
      <div>Calories Burned: {caloriesBurned}</div>
      <div>Workout Minutes: {workoutMinutes}</div>
      <div>Goal Achieved: {goalAchived ? "Yes" : "No"}</div>
    </div>
  );
};

export default ActivityItem;
