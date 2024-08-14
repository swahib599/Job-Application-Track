import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, onLogout }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      navigate('/');
    } else {
      setError("Invalid email or password.");
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
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
