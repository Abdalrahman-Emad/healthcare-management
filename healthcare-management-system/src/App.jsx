// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import PatientManagementPage from './pages/PatientManagementPage';
// import StaffManagementPage from './pages/StaffManagementPage';
// import PatientPortalPage from './pages/PatientPortalPage';
// import NotFoundPage from './pages/NotFoundPage';
// import { AuthProvider } from './context/AuthContext';
// import { PatientProvider } from './context/PatientContext';
// import { AppointmentProvider } from './context/AppointmentContext';
// import { StaffProvider } from './context/StaffContext';
// import Header from './Layout/Header.jsx'
// import Footer from './Layout/Footer';
// import DashboardPage from './components/Dashboard/DashboardChart.jsx';
// import AppointmentManagementPage from './pages/AppointmentManagementPage.jsx';
// import Login from './Auth/Login.jsx';
// import ProtectedRoute from './Auth/ProtectedRoute';
// import Register from './Auth/Register.jsx';


// const App = () => {
//   return (
//     <AuthProvider>
//       <PatientProvider>
//         <AppointmentProvider>
//           <StaffProvider>
//             <Router>
//               <Header />
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route
//                   path="/dashboard"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <DashboardPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/patients"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <PatientManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/staff"
//                   element={
//                     <ProtectedRoute roles={['admin']}>
//                       <StaffManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/appointments"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <AppointmentManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/patient-portal"
//                   element={
//                     <ProtectedRoute roles={['patient']}>
//                       <PatientPortalPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route path="*" element={<NotFoundPage />} />
//               </Routes>
//               <Footer />
//             </Router>
//           </StaffProvider>
//         </AppointmentProvider>
//       </PatientProvider>
//     </AuthProvider>
//   );
// };


// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientManagementPage from './pages/PatientManagementPage';
import StaffManagementPage from './pages/StaffManagementPage';
import PatientPortalPage from './pages/PatientPortalPage';
import NotFoundPage from './pages/NotFoundPage';
import { PatientProvider } from './context/PatientContext';
import { AppointmentProvider } from './context/AppointmentContext';
import { StaffProvider } from './context/StaffContext';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import DashboardPage from './components/Dashboard/DashboardChart.jsx';
import AppointmentManagementPage from './pages/AppointmentManagementPage.jsx';
import Login from './Auth/Login';
import ProtectedRoute from './Auth/ProtectedRoute';
import Auth0ProviderWithHistory from './Auth/Auth0ProviderWithHistory';
import Logout from './Auth/Logout.jsx';


// const App = () => {
//   return (
//     <Router>
//       <Auth0ProviderWithHistory>
//         <PatientProvider>
//           <AppointmentProvider>
//             <StaffProvider>
//               <Header />
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 {/* <Route path="/register" element={<Register />} /> */}
//                 <Route path="/login" element={<Login />} />
//                 <Route
//                   path="/dashboard"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <DashboardPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route path='/Logout' element={<Logout/>}/>
//                 <Route
//                   path="/patients"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <PatientManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/staff"
//                   element={
//                     <ProtectedRoute roles={['admin']}>
//                       <StaffManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/appointments"
//                   element={
//                     <ProtectedRoute roles={['admin', 'staff']}>
//                       <AppointmentManagementPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/patient-portal"
//                   element={
//                     <ProtectedRoute roles={['patient']}>
//                       <PatientPortalPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route path="/403" element={<NotFoundPage />} />
//               </Routes>
//               <Footer />
//             </StaffProvider>
//           </AppointmentProvider>
//         </PatientProvider>
//       </Auth0ProviderWithHistory>
//     </Router>
//   );
// };


const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <PatientProvider>
          <AppointmentProvider>
            <StaffProvider>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/register" element={<Register />} /> */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute roles={['admin', 'staff']}>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route path='/logout' element={<Logout />} />
                <Route
                  path="/patients"
                  element={
                    <ProtectedRoute roles={['admin', 'staff']}>
                      <PatientManagementPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/staff"
                  element={
                    <ProtectedRoute roles={['admin']}>
                      <StaffManagementPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/appointments"
                  element={
                    <ProtectedRoute roles={['admin', 'staff']}>
                      <AppointmentManagementPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/patient-portal"
                  element={
                    <ProtectedRoute roles={['patient']}>
                      <PatientPortalPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/403" element={<NotFoundPage />} />
                {/* Wildcard route for handling 404 - Not Found */}
                <Route path="*" element={<NotFoundPage />} />              </Routes>
              <Footer />
            </StaffProvider>
          </AppointmentProvider>
        </PatientProvider>
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default App;