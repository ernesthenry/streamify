import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MetricsCard from './MetricsCard';

test('renders MetricsCard with given title and value', () => {
  render(<MetricsCard title="Total Users" value="1000" />);

  expect(screen.getByText('Total Users')).toBeInTheDocument();
  expect(screen.getByText('1000')).toBeInTheDocument();
});
