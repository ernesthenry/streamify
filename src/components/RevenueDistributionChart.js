import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

// Register the components you need for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueDistributionChart = () => {
  // Fetch revenue data from Redux state
  const revenue = useSelector((state) => state.metrics.revenue);

  // Prepare chart data
  const data = {
    labels: ['Subscriptions', 'Ads'],
    datasets: [
      {
        data: [revenue.subscriptions, revenue.ads],
        backgroundColor: ['#6366F1', '#10B981'],
        hoverBackgroundColor: ['#4F46E5', '#059669'],
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default RevenueDistributionChart;
