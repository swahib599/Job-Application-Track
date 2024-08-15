import React, { useState } from 'react';

function ApplicationForm({ onApplicationAdded }) {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    dateApplied: '',
    status: 'Applied',
    jobUrl: '', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8001/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        onApplicationAdded(data);
        setFormData({ companyName: '', position: '', dateApplied: '', status: 'Applied', jobUrl: '' });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Add Job Application</h2>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id='companyName'
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        className='form-input'
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        className='form-input'
      />
      <label htmlFor="dateApplied">Date Applied:</label>
      <input
        type="date"
        id="dateApplied"
        name="dateApplied"
        value={formData.dateApplied}
        onChange={handleChange}
        className='form-input'
      />
      <label htmlFor="status">Status:</label>
      <select
        name="status"
        id="status"
        value={formData.status}
        onChange={handleChange}
        className='form-select'
      >
        <option value="Applied">Applied</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <label htmlFor="jobUrl">Job URL:</label>
      <input
        type="url"
        id="jobUrl"
        name="jobUrl"
        placeholder="Job URL"
        value={formData.jobUrl}
        onChange={handleChange}
        className='form-input'
      />
      <button type="submit" className='form-button'>Add Application</button>
    </form>
  );
}

export default ApplicationForm;
