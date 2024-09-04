// AppointmentManagementPage.jsx
import React from 'react';
import AppointmentManagement from '../components/AppointmentManagement/AppointmentManagement';
import './AppointmentManagementPage.css'; // Ensure you import the CSS file

const AppointmentManagementPage = () => {
    return (
        <div className="appointment-management-page">
            <h2>Appointment Management</h2>
            <AppointmentManagement />
        </div>
    );
};

export default AppointmentManagementPage;
