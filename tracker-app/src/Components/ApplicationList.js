import React from 'react';
import ApplicationItem from './ApplicationItem';

const ApplicationList = ({ applications, onDelete, onEdit }) => {
  return (
    <div>
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
