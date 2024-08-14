import React from 'react';
import { createBrowserRouter, RouterProvider,  Navigate } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';

// Dummy authentication function
const onLogin = (email, password) => {
  const validEmail = "user@example.com";
  const validPassword = "password";

  if (email === validEmail && password === validPassword) {
    sessionStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

// Check authentication status
const isAuthenticated = () => sessionStorage.getItem('isAuthenticated') === 'true';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NavBar />
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <NavBar />
        <About />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login onLogin={onLogin} />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
