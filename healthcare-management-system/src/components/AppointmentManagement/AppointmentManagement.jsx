// import React, { useContext } from 'react';
// import { AppointmentContext } from '../../context/AppointmentContext';
// import AppointmentForm from './AppointmentForm';
// import AppointmentList from './AppointmentList';

// const AppointmentManagement = () => {
//     const { addAppointment } = useContext(AppointmentContext);

//     const handleAppointmentSubmit = (values) => {
//         addAppointment(values);
//     };

//     return (
//         <div className="appointment-management">
//             <AppointmentForm onSubmit={handleAppointmentSubmit} />
//             <AppointmentList />
//         </div>
//     );
// };

// export default AppointmentManagement;


import React, { useContext, useState } from 'react';
import { AppointmentContext } from '../../context/AppointmentContext';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

const AppointmentManagement = () => {
    const { addAppointment, updateAppointment } = useContext(AppointmentContext);
    const [editingAppointment, setEditingAppointment] = useState(null);

    const handleAppointmentSubmit = (values) => {
        if (editingAppointment) {
            // If editing, update the appointment
            updateAppointment({ ...editingAppointment, ...values });
            setEditingAppointment(null); // Reset the editing state after updating
        } else {
            // If not editing, add a new appointment
            addAppointment(values);
        }
    };

    const handleEdit = (appointment) => {
        setEditingAppointment(appointment);
    };

    return (
        <div className="appointment-management">
            <AppointmentForm
                onSubmit={handleAppointmentSubmit}
                initialValues={editingAppointment || { patientId: '', staffId: '', date: '', time: '' }}
            />
            <AppointmentList onEdit={handleEdit} />
        </div>
    );
};

export default AppointmentManagement;
