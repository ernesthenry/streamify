import React, { Suspense, lazy, useEffect, useState } from 'react';
import streams from '../data/mockData';
import { setStreams } from '../features/streams/streamsSlice';
import { setMetrics } from '../features/metrics/metricsSlice';
import Spinner from './Spinner';
import { useDispatch, useSelector } from 'react-redux';

const MetricsCard = lazy(() => import('./MetricsCard'));
const DataTable = lazy(() => import('./DataTable'));
const TopSongsChart = lazy(() => import('./TopSongsChart'));
const RevenueDistributionChart = lazy(() => import('./RevenueDistributionChart'));
const UserGrowthChart = lazy(() => import('./UserGrowthChart'));
const Layout = lazy(() => import('./Layout'));

function Dashboard() {
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true);

  // Fetch data from Redux store for metrics
  const metrics = useSelector((state) => state.metrics);

  useEffect(() => {
    // Load the streams data into Redux store
    dispatch(setStreams(streams));

    // Calculate and set metrics
    const totalUsers = new Set(streams.map(stream => stream.userId)).size;
    const activeUsers = totalUsers; // Assuming all users are active for simplicity
    const totalStreams = streams.reduce((acc, stream) => acc + stream.streamCount, 0);
    const revenue = {
      subscriptions: 800000, // Example static value; replace with actual data if available
      ads: 400000, // Example static value; replace with actual data if available
    };
    const topArtist = streams.reduce((acc, stream) => {
      acc[stream.artist] = (acc[stream.artist] || 0) + stream.streamCount;
      return acc;
    }, {});
    const topArtistName = Object.keys(topArtist).reduce((a, b) => topArtist[a] > topArtist[b] ? a : b, '');

    // Example data for totalUsersByMonth and activeUsersByMonth
    const totalUsersByMonth = new Array(12).fill(totalUsers / 12); 
    const activeUsersByMonth = new Array(12).fill(activeUsers / 12);

    dispatch(setMetrics({
      totalUsers,
      activeUsers,
      totalStreams,
      revenue,
      topArtist: topArtistName,
      totalUsersByMonth,
      activeUsersByMonth,
    }));

    // Set a delay to show the spinner if loading takes longer than expected
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 300); // Adjust the delay as needed (300ms here)

    // Clear the timer if component unmounts before the delay
    return () => clearTimeout(timer);
  }, [dispatch]);

  // Ensure the spinner is shown before rendering the content
  if (showSpinner) {
    return <Spinner />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricsCard title="Total Users" value={metrics.totalUsers} />
          <MetricsCard title="Active Users" value={metrics.activeUsers} />
          <MetricsCard title="Total Streams" value={metrics.totalStreams} />
          <MetricsCard title="Revenue" value={`$${metrics.revenue.subscriptions + metrics.revenue.ads}`} />
          <MetricsCard title="Top Artist" value={metrics.topArtist} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <UserGrowthChart />
          <RevenueDistributionChart />
        </div>
        <div className="grid grid-cols-1 mb-8">
          <TopSongsChart />
        </div>
        <div className="grid grid-cols-1 mb-8">
          <DataTable />
        </div>
      </Layout>
    </Suspense>
  );
}

export default Dashboard;
