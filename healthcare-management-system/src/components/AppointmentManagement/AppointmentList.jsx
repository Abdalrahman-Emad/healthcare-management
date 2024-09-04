// import React, { useContext } from 'react';
// import { AppointmentContext } from '../../context/AppointmentContext';

// const AppointmentList = () => {
//     const { appointments } = useContext(AppointmentContext);

//     return (
//         <div className="appointment-list">
//             <h3>Appointment List</h3>
//             <ul>
//                 {appointments.map(appointment => (
//                     <li key={appointment.id}>
//                         Patient ID: {appointment.patientId}, Staff ID: {appointment.staffId}, Date: {appointment.date}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AppointmentList;





import React, { useContext } from 'react';
import { AppointmentContext } from '../../context/AppointmentContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './AppointmentList.css';
import { PatientContext } from '../../context/PatientContext';
import { StaffContext } from '../../context/StaffContext';

const AppointmentList = ({ onEdit }) => {
    const { appointments, removeAppointment } = useContext(AppointmentContext);
    const { patients } = useContext(PatientContext);
    const { staff } = useContext(StaffContext);

    const getPatientName = (patientId) => {
        const patient = patients.find(patient => patient.id === patientId);
        return patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown';
    };

    const getStaffName = (staffId) => {
        const staffMember = staff.find(member => member.id === staffId);
        return staffMember ? `${staffMember.firstName} ${staffMember.lastName}` : 'Unknown';
    };

    return (
        <div className="appointment-list">
            <h3>Appointment List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Staff Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{getPatientName(appointment.patientId)}</td>
                            <td>{getStaffName(appointment.staffId)}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <button
                                    onClick={() => removeAppointment(appointment.id)}
                                    className="btn btn-icon"
                                    aria-label="Delete appointment"
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                                <button
                                    onClick={() => onEdit(appointment)}
                                    className="btn btn-icon"
                                    aria-label="Edit appointment"
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;
