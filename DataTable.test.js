import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DataTable from './DataTable';
import '@testing-library/jest-dom/extend-expect';

// Mock data for testing
const mockStreams = [
  { id: 1, songName: 'Blinding Lights', artist: 'The Weeknd', dateStreamed: '2024-09-01', streamCount: 150, userId: 'user123' },
  { id: 2, songName: 'Save Your Tears', artist: 'The Weeknd', dateStreamed: '2024-09-02', streamCount: 200, userId: 'user124' },
  { id: 3, songName: 'Levitating', artist: 'Dua Lipa', dateStreamed: '2024-09-03', streamCount: 180, userId: 'user125' },
];

// Mock reducer and store
const mockReducer = (state = { streams: mockStreams }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(mockReducer);

test('renders DataTable with headers', () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );

  expect(screen.getByText('Recent Streams')).toBeInTheDocument();
  expect(screen.getByText('Song Name')).toBeInTheDocument();
  expect(screen.getByText('Artist')).toBeInTheDocument();
  expect(screen.getByText('Date Streamed')).toBeInTheDocument();
  expect(screen.getByText('Stream Count')).toBeInTheDocument();
  expect(screen.getByText('User ID')).toBeInTheDocument();
});

test('filters the data table by song name', () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText('Filter by song name'), { target: { value: 'Blinding Lights' } });

  expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
  expect(screen.queryByText('Save Your Tears')).toBeNull();
});

test('sorts the data table by stream count', () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );

  // Click on the 'Stream Count' header to sort
  fireEvent.click(screen.getByText('Stream Count'));

  // Verify that the rows are sorted by stream count (ascending order)
  const rows = screen.getAllByRole('row');
  expect(rows[1].textContent).toContain('Levitating'); // Expected to be first after sorting
  expect(rows[2].textContent).toContain('Blinding Lights'); // Expected to be second
  expect(rows[3].textContent).toContain('Save Your Tears'); // Expected to be third
});

test('sorts the data table by date streamed', () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );

  // Click on the 'Date Streamed' header to sort
  fireEvent.click(screen.getByText('Date Streamed'));

  // Verify that the rows are sorted by date (ascending order)
  const rows = screen.getAllByRole('row');
  expect(rows[1].textContent).toContain('2024-09-01'); // Expected to be first
  expect(rows[2].textContent).toContain('2024-09-02'); // Expected to be second
  expect(rows[3].textContent).toContain('2024-09-03'); // Expected to be third
});
