/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// Assuming you have a useAuth hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user authentication status

  if (!user) {
    // If user is not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the protected route
  return children;
};

export default ProtectedRoute;
