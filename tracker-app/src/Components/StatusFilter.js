import React from 'react';

function StatusFilter({ status, setStatus }) {
  return (
    <div className='filter'>
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Pending</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default StatusFilter;
