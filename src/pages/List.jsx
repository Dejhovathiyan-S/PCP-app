import React from "react";
import { useApp } from "../context/TrackerContext";
import ActivityItem from "../components/Navigation";

const List = () => {
	const { items, loading } = useApp();

	if (loading) return <div>Loading...</div>;
	if (!items.length) return <div>No activities found.</div>;

	return (
		<div>
			<h1>Activities List Page</h1>
			{items.map((activity, idx) => (
				<ActivityItem key={idx} activity={activity} />
			))}
		</div>
	);
};

export default List;
