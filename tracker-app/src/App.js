import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
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
      .then(data => setApplications(data));
  }, []);

  // Add new application
  const addApplication = (newApplication) => {
    setApplications([...applications, newApplication]);
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
      <NavBar />
      <Header />
      <StatusFilter status={status} setStatus={setStatus} />
      <ApplicationForm onApplicationAdded={addApplication} />
      <ApplicationList
        applications={filteredApplications}
        onDelete={deleteApplication}
        onEdit={updateApplication}
      />
    </div>
  );
};

export default App;
