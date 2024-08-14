// ApplicationDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplicationDetails = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8001/applications/${id}`)
      .then(response => response.json())
      .then(data => setApplication(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{application.position} at {application.companyName}</h2>
      <p>Date Applied: {application.dateApplied}</p>
      <p>Status: {application.status}</p>
      <p>More details about the application...</p>
    </div>
  );
};

export default ApplicationDetails;
