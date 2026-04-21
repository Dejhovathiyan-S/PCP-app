import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const FilterActivities = () => {
  const { items, loading } = useApp();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  if (loading) return <div>Loading...</div>;

  let filtered = [];
  if (input === "") {
    filtered = [];
  } else if (isNaN(Number(input)) || Number(input) < 0) {
    filtered = [];
    if (input !== "") setError("Invalid input");
  } else {
    filtered = items.filter(a => a.steps >= Number(input));
    setError("");
  }

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter minimum steps"
      />
      {input === "" && <div style={{color:'red'}}>Please enter a value</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
      {filtered.map((activity, idx) => (
        <ActivityItem key={idx} activity={activity} />
      ))}
    </div>
  );
};

export default FilterActivities;
