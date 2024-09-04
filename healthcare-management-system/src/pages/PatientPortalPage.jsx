// import React, { useContext } from 'react';
// import { PatientContext } from '.././context/PatientContext';

// const PatientPortalPage = () => {
//     const { patients } = useContext(PatientContext);

//     return (
//         <div>
//             <h2>Patient Portal</h2>
//             {patients.length > 0 ? (
//                 <ul>
//                     {patients.map(patient => (
//                         <li key={patient.id}>
//                             {patient.firstName} {patient.lastName} - {patient.email}
//                             {/* Render medical history if available */}
//                             {patient.medicalHistory && (
//                                 <div>
//                                     <h4>Medical History</h4>
//                                     <p><strong>Diagnosis:</strong> {patient.medicalHistory.diagnosis}</p>
//                                     <p><strong>Treatment:</strong> {patient.medicalHistory.treatment}</p>
//                                     <p><strong>Notes:</strong> {patient.medicalHistory.notes}</p>
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No patients available.</p>
//             )}
//         </div>
//     );
// };

// export default PatientPortalPage;





import React, { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';
import '../components/PatientPortal/PatientPortal.css'; // Make sure to import the updated CSS file

const PatientPortalPage = () => {
    const { patients } = useContext(PatientContext);

    return (
        <div className="patient-portal">
            <h2 className="portal-title">Patient Portal</h2>
            <div className="portal-section">
                {patients.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                                <th>Medical History</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No patients available.</p>
                )}
            </div>
        </div>
    );
};

export default PatientPortalPage;
