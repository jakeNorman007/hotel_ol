import React from "react";
import Layout from "../features/dashboard/Layout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

function Dashboard() {
  return (
    <>
      <div className="flex justify-between">
      <p className="text-gray-600 font-bold text-4xl">Dashboard</p>
      <DashboardFilter />
      </div>
      <Layout />
    </>
  );
}

export default Dashboard;
