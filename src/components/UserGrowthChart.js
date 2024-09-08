import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserGrowthChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Total Users',
        data: [1200, 2300, 3100, 4000, 4800, 6000, 7200, 8000, 9000, 10000, 11000, 12000],
        borderColor: '#6366F1',
        fill: false,
      },
      {
        label: 'Active Users',
        data: [800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000, 8800, 9600],
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
