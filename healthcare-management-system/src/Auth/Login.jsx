// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const mockUser = {
//     id: 1,
//     username: 'testuser',
//     role: 'admin'
// };

// // Generate a mock token
// const generateToken = (user) => {
//     // Use Base64 encoding for simulation purposes
//     return btoa(JSON.stringify(user)); // Simulated token
// };

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (username === 'testuser') { // Mock validation
//             const token = generateToken(mockUser); // Generate token
//             localStorage.setItem('token', token);
//             navigate('/dashboard'); // Redirect to a protected route
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const Login = () => {
//     const { login } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         password: Yup.string().required('Password is required'),
//     });

//     const handleSubmit = async (values) => {
//         setLoading(true);
//         try {
//             const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(values),
//             });

//             if (!response.ok) throw new Error('Login failed');

//             const data = await response.json();
//             login(data.token); // Handle token storage and user state
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Formik
//             initialValues={{ email: '', password: '' }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//         >
//             {() => (
//                 <Form>
//                     {error && <div className="text-danger">{error}</div>}
//                     {loading && <div>Loading...</div>}
//                     <div className="mb-3">
//                         <label htmlFor="email">Email</label>
//                         <Field name="email" type="email" className="form-control" />
//                         <ErrorMessage name="email" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password">Password</label>
//                         <Field name="password" type="password" className="form-control" />
//                         <ErrorMessage name="password" component="div" className="text-danger" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Login</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default Login;







// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <button onClick={() => loginWithRedirect()}>Login</button>
//   );
// };

// export default Login;



// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = () => {
//     loginWithRedirect();
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <p>Welcome back! Please log in to continue.</p>
//       <button onClick={handleLogin}>Log In</button>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from './Spinner/Spinner';
import './Login.css';

const Login = () => {
  const { loginWithRedirect, isLoading } = useAuth0();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await loginWithRedirect();
    setLoading(false);
  };

  return (
    <div className="login-container">
      {loading && <Spinner />}
      <div className="login-form">
        <p className="login-subtitle">Please log in to access your account.</p>
        <button className="login-button" onClick={handleLogin} disabled={loading}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
