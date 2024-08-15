import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ApplicationList from './Components/ApplicationList';
import ApplicationForm from './Components/ApplicationForm';
import StatusFilter from './Components/StatusFilter';
import './App.css'

const App = () => {
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState('All');

  // Fetch applications on component mount
  useEffect(() => {
    fetch('http://localhost:8001/applications')
      .then(response => response.json())
      .then(data => {
        const sortedApplications = data.sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));
        setApplications(sortedApplications);
      });
  }, []);

  // Add new application
  const addApplication = (newApplication) => {
    setApplications(prevApplications => {
      const updatedApplications = [newApplication, ...prevApplications];
      return updatedApplications.sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));
    });
  };

  // Update an existing application
  const updateApplication = (id, updatedApplication) => {
    fetch(`http://localhost:8001/applications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedApplication),
    })
      .then(response => response.json())
      .then(data => {
        const updatedApplications = applications.map(app =>
          app.id === id ? data : app
        );
        setApplications(updatedApplications);
      })
      .catch(error => console.error('Error:', error));
  };

  // Delete an application
  const deleteApplication = (id) => {
    fetch(`http://localhost:8001/applications/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedApplications = applications.filter(app => app.id !== id);
        setApplications(updatedApplications);
      })
      .catch(error => console.error('Error:', error));
  };

  const filteredApplications = applications.filter(application =>
    status === 'All' || application.status === status
  );

  return (
    <div>
      <Header />
      <ApplicationForm onApplicationAdded={addApplication} />
      <StatusFilter status={status} setStatus={setStatus} />
      <ApplicationList
        applications={filteredApplications}
        onDelete={deleteApplication}
        onEdit={updateApplication}
      />
    </div>
  );
};

export default App;