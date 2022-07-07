import React from "react";
import DashboardBanner from "../DashboardBanner/DashboardBanner";
import Sites from "../Sites/Sites/Sites";

const Dashboard = () => {
  return (
    <div>
      <DashboardBanner></DashboardBanner>
      <Sites></Sites>
    </div>
  );
};

export default Dashboard;
