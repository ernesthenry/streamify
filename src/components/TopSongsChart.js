import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TopSongsChart = () => {
  // Fetch streams data from Redux store
  const streams = useSelector((state) => state.streams);

  // Process data to get the top 5 songs by stream count
  const topSongs = [...streams]
    .sort((a, b) => b.streamCount - a.streamCount)
    .slice(0, 5);

  const labels = topSongs.map((song) => song.songName);
  const data = topSongs.map((song) => song.streamCount);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Stream Count',
        data,
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TopSongsChart;
