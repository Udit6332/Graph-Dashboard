import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const lineData = [
  {
    date: "6/30/2024 - 7/6/2024",
    orders: 1600,
    sales: 1404,
    avgOrderValue: 351,
  },
  {
    date: "7/7/2024 - 7/13/2024",
    orders: 1150,
    sales: 1150,
    avgOrderValue: 401,
  },
  {
    date: "7/14/2024 - 7/20/2024",
    orders: 800,
    sales: 702,
    avgOrderValue: 351,
  },
  {
    date: "7/21/2024 - 7/27/2024",
    orders: 500,
    sales: 451,
    avgOrderValue: 351,
  },
];

const LineChartComponent = () => {
  return (
    <div className="chart-container">
      <h3>
        Sales vs Orders <i className="info-icon">i</i>
      </h3>
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#d3d3d3",
          border: "none",
        }}
      />

      <LineChart width={550} height={400} data={lineData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <YAxis />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="center" />

        <Line type="monotone" dataKey="orders" stroke="#FF6384" />
        <Line type="monotone" dataKey="sales" stroke="#36A2EB" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
