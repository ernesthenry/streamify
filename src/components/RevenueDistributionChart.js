import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueDistributionChart = () => {
  const data = {
    labels: ['Subscriptions', 'Ads'],
    datasets: [
      {
        data: [800000, 400000],
        backgroundColor: ['#6366F1', '#10B981'],
        hoverBackgroundColor: ['#4F46E5', '#059669'],
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default RevenueDistributionChart;
