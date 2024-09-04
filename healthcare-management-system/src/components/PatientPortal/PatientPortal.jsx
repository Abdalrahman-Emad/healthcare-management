import React, { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import './PatientPortal.css';

const PatientPortal = () => {
    const { patients } = useContext(PatientContext);

    return (
        <div className="patient-portal">
            <h2 className='portal-title'>Patient Portal</h2>
            <div className="portal-section">
                <h3>Patient List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Medical History</th>
                            <th>Appointments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.email}</td>
                                <td>{patient.dateOfBirth}</td>
                                <td>
                                    {patient.medicalHistory ? (
                                        <>
                                            <p><strong>Diagnosis:</strong> {patient.medicalHistory.diagnosis}</p>
                                            <p><strong>Treatment:</strong> {patient.medicalHistory.treatment}</p>
                                            <p><strong>Notes:</strong> {patient.medicalHistory.notes}</p>
                                        </>
                                    ) : (
                                        <p>No medical history available.</p>
                                    )}
                                </td>
                                <td>
                                    <ul>
                                        {patient.appointments && patient.appointments.length > 0 ? (
                                            patient.appointments.map(app => (
                                                <li key={app.id}>
                                                    Staff ID: {app.staffId}, Date: {app.date}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No appointments.</p>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientPortal;
