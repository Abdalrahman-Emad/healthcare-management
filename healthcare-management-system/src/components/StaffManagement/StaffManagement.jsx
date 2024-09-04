import React, { useContext, useState } from 'react';
import { StaffContext } from '../../context/StaffContext';
import StaffForm from './StaffForm';
import StaffList from './StaffList';

const StaffManagement = () => {
    const { addStaff, updateStaff } = useContext(StaffContext);
    const [editingStaff, setEditingStaff] = useState(null); // State to manage editing staff

    const handleStaffSubmit = (values) => {
        if (editingStaff) {
            // Update existing staff member
            updateStaff({ ...values, id: editingStaff.id });
            setEditingStaff(null); // Clear editing state after update
        } else {
            // Add new staff member
            addStaff(values);
        }
    };

    const handleEditStaff = (staff) => {
        setEditingStaff(staff);
    };

    return (
        <div className="staff-management">
            <StaffForm 
                onSubmit={handleStaffSubmit} 
                initialValues={editingStaff || { id: '', firstName: '', lastName: '', email: '', role: '' }} 
            />
            <StaffList onEdit={handleEditStaff} />
        </div>
    );
};

export default StaffManagement;
