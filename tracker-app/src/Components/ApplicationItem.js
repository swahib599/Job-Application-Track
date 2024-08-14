import React, { useState } from 'react';

function ApplicationItem({ application, onDelete, onEdit }) {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex-item ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <h3>{application.position}</h3>

      <button onClick={handleToggleExpand} className="view-details-button">
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>

      {isExpanded && (
        <div>
          {!isEditing ? (
            <>
              <p>Company: {application.companyName}</p>
              <p>Date Applied: {application.dateApplied}</p>
              <p>Status: {application.status}</p>
              {application.jobUrl && (
                <p>
                  <a href={application.jobUrl} target="_blank" rel="noopener noreferrer">
                    View Job Description
                  </a>
                </p>
              )}
              <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
              <button onClick={() => onDelete(application.id)} className="delete-btn">Delete</button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ApplicationItem;
