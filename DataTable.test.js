import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../store';
import DataTable from './DataTable';

const mockData = [
  {
    id: 1,
    songName: 'Song A',
    artist: 'Artist A',
    dateStreamed: '2024-01-01',
    streamCount: 100,
    userId: 1,
  },
  // Add more mock data if needed
];

test('renders DataTable with sorted data', () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );

  // Assume you’ve set mock data in Redux store
  expect(screen.getByText('Song A')).toBeInTheDocument();
  // Add more assertions based on your requirements
});
