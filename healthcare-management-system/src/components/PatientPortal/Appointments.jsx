import React, { useContext } from 'react';
import { AppointmentContext } from '../../context/AppointmentContext';

const Appointments = () => {
    const { appointments } = useContext(AppointmentContext);
    const patientId = 1; // Simulate getting the current patient's ID

    const patientAppointments = appointments.filter(app => app.patientId === patientId);

    return (
        <div className="appointments">
            <h3>Your Appointments</h3>
            {patientAppointments.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Staff ID</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientAppointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.staffId}</td>
                                <td>{appointment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No appointments available.</p>
            )}
        </div>
    );
};

export default Appointments;
