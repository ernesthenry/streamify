import React from 'react';
import { useSelector } from 'react-redux';

const MetricsCard = React.memo(({ title, metric }) => {
    const metrics = useSelector((state) => state.metrics);
  
    const getMetricValue = () => {
      switch (title) {
        case 'Total Users':
          return metrics.totalUsers;
        case 'Active Users':
          return metrics.activeUsers;
        case 'Total Streams':
          return metrics.totalStreams;
        case 'Revenue':
          return `${metrics.revenue.subscriptions + metrics.revenue.ads}`;
        case 'Top Artist':
          return metrics.topArtist;
        default:
          return 'N/A';
      }
    };
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <p className="mt-2 text-2xl font-bold text-gray-900">{getMetricValue()}</p>
      </div>
    );
  });



export default MetricsCard;
