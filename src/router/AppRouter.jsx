import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import List from "../pages/List";
import ActivityDetailView from "../pages/ActivityDetailView";
import FilterActivities from "../pages/FilterActivities";
import Stats from "../pages/Stats";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<List />} />
          <Route path="/activities/:id" element={<ActivityDetailView />} />
          <Route path="/filter" element={<FilterActivities />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;