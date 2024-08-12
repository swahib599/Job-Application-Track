import React from 'react';

const StatusFilter = ({ status, setStatus }) => {
  return (
    <div>
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default StatusFilter;
