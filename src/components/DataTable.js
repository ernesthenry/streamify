import React from 'react';
import { useSelector } from 'react-redux';

const DataTable = () => {
  const streams = useSelector((state) => state.streams);
  const [sortConfig, setSortConfig] = React.useState({ key: 'dateStreamed', direction: 'ascending' });

  const sortedStreams = [...streams].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Streams</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th onClick={() => requestSort('songName')} className="cursor-pointer">Song Name</th>
            <th onClick={() => requestSort('artist')} className="cursor-pointer">Artist</th>
            <th onClick={() => requestSort('dateStreamed')} className="cursor-pointer">Date Streamed</th>
            <th onClick={() => requestSort('streamCount')} className="cursor-pointer">Stream Count</th>
            <th onClick={() => requestSort('userId')} className="cursor-pointer">User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedStreams.map((stream) => (
            <tr key={stream.id}>
              <td>{stream.songName}</td>
              <td>{stream.artist}</td>
              <td>{stream.dateStreamed}</td>
              <td>{stream.streamCount}</td>
              <td>{stream.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
