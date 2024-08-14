import React from 'react';
import ApplicationItem from './ApplicationItem';

function ApplicationList ({ applications, onDelete, onEdit }) {
  return (
    <div className="flex-container"> 
      {applications.map(application => (
        <ApplicationItem
          key={application.id}
          application={application}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ApplicationList;
