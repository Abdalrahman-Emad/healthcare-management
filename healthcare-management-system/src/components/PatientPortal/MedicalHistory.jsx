import React from 'react';
import PropTypes from 'prop-types';

const MedicalHistory = ({ patient }) => {
    return (
        <div className="medical-history">
            <h3>Medical History for {patient.firstName} {patient.lastName}</h3>
            {patient.medicalHistory ? (
                <table>
                    <tbody>
                        <tr>
                            <th>Diagnosis</th>
                            <td>{patient.medicalHistory.diagnosis}</td>
                        </tr>
                        <tr>
                            <th>Treatment</th>
                            <td>{patient.medicalHistory.treatment}</td>
                        </tr>
                        <tr>
                            <th>Notes</th>
                            <td>{patient.medicalHistory.notes}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No medical history available.</p>
            )}
        </div>
    );
};

// Define prop types for the component
MedicalHistory.propTypes = {
    patient: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        medicalHistory: PropTypes.shape({
            diagnosis: PropTypes.string,
            treatment: PropTypes.string,
            notes: PropTypes.string
        })
    }).isRequired
};

export default MedicalHistory;
