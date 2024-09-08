import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TopSongsChart = () => {
  const data = {
    labels: ['Blinding Lights', 'Save Your Tears', 'Levitating', 'Peaches', 'Good 4 U'],
    datasets: [
      {
        label: 'Stream Count',
        data: [150, 200, 180, 130, 210],
        backgroundColor: '#6366F1',
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
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Streamed Songs</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopSongsChart;
