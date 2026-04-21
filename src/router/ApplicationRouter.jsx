import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ActivitiesList from "../pages/ActivitiesList";
import SingleActivity from "../pages/SingleActivity";
import FilterRecords from "../pages/FilterRecords";
import Analytics from "../pages/Analytics";
import Navigation from "../components/Navigation";

export default function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/activities" />} />
        <Route path="/activities" element={<ActivitiesList />} />
        <Route path="/activities/:id" element={<SingleActivity />} />
        <Route path="/filter" element={<FilterRecords />} />
        <Route path="/stats" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}