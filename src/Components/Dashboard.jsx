import React from "react";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import ChartContainer from "./ChartContainer";
import styles from "./dashboard.module.css";
import Nav from "./Nav";
const Dashboard = () => {
  return (
    <div className={styles.check}>
    
      <div id={styles.nav}>
        <Nav/>
      </div>
      
      <div className={styles.dashboard}>
        <ChartContainer>
          <LineChartComponent />
        </ChartContainer>
        <ChartContainer>
          <PieChartComponent />
        </ChartContainer>
      </div>
    </div>
  );
};

export default Dashboard;
