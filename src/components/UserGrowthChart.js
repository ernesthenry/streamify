import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserGrowthChart = () => {
  const { totalUsersByMonth, activeUsersByMonth } = useSelector((state) => state.metrics);

  // Provide default values if data is undefined
  const defaultMonthlyData = new Array(12).fill(0);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Total Users',
        data: totalUsersByMonth || defaultMonthlyData,  // Use default values if data is not available
        borderColor: '#6366F1',
        fill: false,
      },
      {
        label: 'Active Users',
        data: activeUsersByMonth || defaultMonthlyData,  // Use default values if data is not available
        borderColor: '#10B981',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGrowthChart;
