import React from 'react';
import PatientManagement from '../components/PatientManagement/PatientManagement';
import './PatientManagementPage.css';



const PatientManagementPage = () => {
    return (
        <div className="patient-management-page">
            <h2>Patient Management</h2>
            <PatientManagement />
        </div>
    );
};

export default PatientManagementPage;
