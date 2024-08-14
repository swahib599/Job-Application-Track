import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      localStorage.setItem('isAuthenticated', 'true');
      // Clear the form fields after successful login
      setEmail('');
      setPassword('');
      navigate('/');
    } else {
      setError("Invalid email or password.");
      // Clear the password field on unsuccessful login
      setPassword('');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signin-input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
          autoComplete="new-password" // Prevents browser from autofilling
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
