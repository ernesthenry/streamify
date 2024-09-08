import React, { Suspense, lazy, useEffect, useState } from 'react';
import streams from '../data/mockData';
import { setStreams } from '../features/streams/streamsSlice';
import Spinner from './Spinner';
import { useDispatch } from 'react-redux';

const MetricsCard = lazy(() => import('./MetricsCard'));
const DataTable = lazy(() => import('./DataTable'));
const TopSongsChart = lazy(() => import('./TopSongsChart'));
const RevenueDistributionChart = lazy(() => import('./RevenueDistributionChart'));
const UserGrowthChart = lazy(() => import('./UserGrowthChart'));
const Layout = lazy(() => import('./Layout'));

function Dashboard() {
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Load the streams data into Redux store
    dispatch(setStreams(streams));

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
          <MetricsCard title="Total Users" value="12,000" />
          <MetricsCard title="Active Users" value="9,600" />
          <MetricsCard title="Total Streams" value="1,200,000" />
          <MetricsCard title="Revenue" value="$1,200,000" />
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
