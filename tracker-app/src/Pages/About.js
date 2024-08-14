import React from 'react';

function About()  {
  return (
    <div className='about'>
      <h1>About Job Application Tracker</h1>
      <p>
        Welcome to Job Application Tracker, an application designed to help you streamline and manage your job search process. Whether you're tracking multiple job applications or just want a simple way to keep all your application details in one place, this tool is here to assist you.
      </p>
      <h3>Features</h3>
      <ul>
        <li><strong>Track Applications:</strong> Keep track of your job applications, including company names, positions, dates applied, and status.</li>
        <li><strong>Add New Applications:</strong> Easily add new job applications and update their status as you progress through the interview process.</li>
        <li><strong>Edit and Delete:</strong> Modify or remove applications as needed.</li>
        <li><strong>Filter by Status:</strong> View your applications based on their status to stay organized.</li>
      </ul>
      <h3>How It Works</h3>
      <p>
        The Job Application Tracker allows you to add new job applications through a simple form. You can update the status of each application to keep track of where you stand with each opportunity. The application also provides a filtering option so you can view applications based on their current status.
      </p>
      <h3>Technology Used</h3>
      <p>
        This application is built with React, leveraging modern web technologies to provide a smooth and responsive user experience. The backend API is used to store and retrieve application data, and all interactions are performed via RESTful API endpoints.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or feedback, feel free to reach out to us through the <a href="/contact">Contact Us</a> page.
      </p>
    </div>
  );
};

export default About;
