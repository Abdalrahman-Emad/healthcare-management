// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, roles }) => {
//     const { user } = useContext(AuthContext);

//     if (!user) {
//         return <Navigate to="/login" />;
//     }

//     if (roles && !roles.includes(user.role)) {
//         return <Navigate to="/" />;
//     }

//     return children;
// };

// export default ProtectedRoute;




// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ children, roles }) => {
//     const { user } = useContext(AuthContext);

//     if (!user) {
//         // Not logged in
//         return <Navigate to="/login" />;
//     }

//     if (roles && !roles.includes(user.role)) {
//         // Logged in but does not have required role
//         return <Navigate to="/" />;
//     }

//     return children;
// };

// export default ProtectedRoute;



// src/Auth/ProtectedRoute.jsx
// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, roles }) => {
//   const { isAuthenticated, user } = useAuth0();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // Example role-based access control
//   // Replace this with actual role check logic based on user roles
//   const userHasRole = roles.includes(user?.role);

//   if (!userHasRole) {
//     return <Navigate to="/403" />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;  // Or a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const customClaimNamespace = 'http://localhost:5173/';
  const userHasRole = roles.includes(user?.[customClaimNamespace]);

//   if (!userHasRole) {
//     return <Navigate to="/403" />;
//   }

  return children;
};

export default ProtectedRoute;
