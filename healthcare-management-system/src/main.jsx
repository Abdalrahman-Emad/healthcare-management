// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
// import App from './App';
// import './index.css'; // Import any global styles
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


// import { PatientProvider } from './context/PatientContext';
// import { AppointmentProvider } from './context/AppointmentContext';
// import { StaffProvider } from './context/StaffContext';

// // Create a root and render the App component
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <PatientProvider>
//         <AppointmentProvider>
//           <StaffProvider>
//             <App />
//           </StaffProvider>
//         </AppointmentProvider>
//       </PatientProvider>
//     </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


import { PatientProvider } from './context/PatientContext';
import { AppointmentProvider } from './context/AppointmentContext';
import { StaffProvider } from './context/StaffContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <PatientProvider>
                <AppointmentProvider>
                    <StaffProvider>
                        <App />
                    </StaffProvider>
                </AppointmentProvider>
            </PatientProvider>
    </React.StrictMode>
);
