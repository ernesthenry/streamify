import React, { Suspense, lazy } from 'react';
import streams from '../../data/mockData';
import Spinner from './components/Spinner';

// Lazy load components
const MetricsCard = lazy(() => import('./components/MetricsCard'));
const DataTable = lazy(() => import('./components/DataTable'));
const TopSongsChart = lazy(() => import('./components/TopSongsChart'));
const RevenueDistributionChart = lazy(() => import('./components/RevenueDistributionChart'));
const UserGrowthChart = lazy(() => import('./components/UserGrowthChart'));
const Layout = lazy(() => import('./components/Layout'));

function Dashboard() {
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
          <DataTable streams={streams} />
        </div>
      </Layout>
    </Suspense>
  );
}

export default Dashboard;
