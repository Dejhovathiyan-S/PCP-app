
import React from "react";
import { useApp } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const GoalStatusUpdate = () => {
	const { items, loading, autoToggleGoalAchieved } = useApp();

	if (loading) return <div>Loading...</div>;

	return (
		<div>
			<h2>Goal Status Update</h2>
			<button onClick={autoToggleGoalAchieved} style={{marginBottom: 16}}>Update Goal Achieved Status</button>
			{items.map((activity, idx) => (
				<ActivityItem key={idx} activity={activity} />
			))}
		</div>
	);
};

export default GoalStatusUpdate;
