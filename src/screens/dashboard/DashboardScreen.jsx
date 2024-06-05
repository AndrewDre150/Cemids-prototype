import { AreaCards, AreaCharts, AreaTable, AreaTop, AreaThinkspeak } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaThinkspeak />
      <AreaCharts />
      {/* <AreaTable /> */}
    </div>
  );
};

export default Dashboard;
