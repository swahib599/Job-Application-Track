import React, { useState } from 'react';

const ApplicationItem = ({ application, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...application });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    onEdit(application.id, formData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex-item"> 
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="flex-item"> 
      <h3>{application.position} at {application.companyName}</h3>
      <p>Date Applied: {application.dateApplied}</p>
      <p>Status: {application.status}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(application.id)}>Delete</button>
    </div>
  );
};

export default ApplicationItem;
