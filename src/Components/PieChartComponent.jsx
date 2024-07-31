import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const pieData = [
  { name: 'WooCommerce Store', value: 44.2, color: '#FF6384' },
  { name: 'Shopify Store', value: 55.8, color: '#36A2EB' },
];

const totalValue = 2659;

const PieChartComponent = () => {
  return (
    <div className="chart-container">
      <h3>Portion of Sales <i className="info-icon">i</i></h3>
      <hr style={{ width: '100%', height: '1px', backgroundColor: '#d3d3d3', border: 'none' }} />
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ value }) => `${value}%`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <text x={200} y={200} textAnchor="middle" dominantBaseline="middle" className="pie-total">
          Total
        </text>
        <text x={200} y={220} textAnchor="middle" dominantBaseline="middle" className="pie-total-value">
          {totalValue}
        </text>
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
