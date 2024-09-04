// StaffManagementPage.jsx
import React from 'react';
import StaffManagement from '../components/StaffManagement/StaffManagement';
import './StaffManagementPage.css'; // Ensure you import the CSS file

const StaffManagementPage = () => {
    return (
        <div className="staff-management-page">
            <h2>Staff Management</h2>
            <StaffManagement />
        </div>
    );
};

export default StaffManagementPage;
