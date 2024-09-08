import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const DataTable = () => {
  const streams = useSelector((state) => state.streams || []); // Ensuring streams is always an array
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'ascending' });

  // Filtered streams, memoized for performance optimization
  const filteredStreams = useMemo(() => {
    return streams.filter((stream) => 
      stream.songName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [streams, filter]);

  // Sorted streams, memoized for performance optimization
  const sortedStreams = useMemo(() => {
    const sortedArray = [...filteredStreams];
    sortedArray.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  }, [filteredStreams, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    }
    return null;
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Streams</h2>
      <input
        type="text"
        placeholder="Filter by song name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 w-100 border rounded w-full"
      />
      <table className="w-full text-left">
        <thead>
          <tr>
            <th onClick={() => requestSort('songName')} className="cursor-pointer">
              Song Name {getSortIndicator('songName')}
            </th>
            <th onClick={() => requestSort('artist')} className="cursor-pointer">
              Artist {getSortIndicator('artist')}
            </th>
            <th onClick={() => requestSort('dateStreamed')} className="cursor-pointer">
              Date Streamed {getSortIndicator('dateStreamed')}
            </th>
            <th onClick={() => requestSort('streamCount')} className="cursor-pointer">
              Stream Count {getSortIndicator('streamCount')}
            </th>
            <th onClick={() => requestSort('userId')} className="cursor-pointer">
              User ID {getSortIndicator('userId')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStreams.length > 0 ? (
            sortedStreams.map((stream) => (
              <tr key={stream.id}>
                <td>{stream.songName}</td>
                <td>{stream.artist}</td>
                <td>{stream.dateStreamed}</td>
                <td>{stream.streamCount}</td>
                <td>{stream.userId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500">No streams found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
