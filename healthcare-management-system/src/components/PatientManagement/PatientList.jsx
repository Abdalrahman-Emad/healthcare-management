// import React, { useContext } from 'react';
// import { PatientContext } from '../../context/PatientContext';

// const PatientList = () => {
//     const { patients } = useContext(PatientContext);

//     return (
//         <div className="patient-list">
//             <h3>Patient List</h3>
//             <ul>
//                 {patients.map(patient => (
//                     <li key={patient.id}>{patient.firstName} {patient.lastName}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PatientList;

// // PatientList.jsx
// import React, { useContext } from 'react';
// import { PatientContext } from '../../context/PatientContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
// import './PatientList.css'; // Ensure you import the CSS file

// const PatientList = ({onEdit}) => {
//     const { patients, removePatient } = useContext(PatientContext);

//     return (
//         <div className="patient-list">
//             <h3>Patient List</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {patients.map(patient => (
//                         <tr key={patient.id}>
//                             <td>{patient.id}</td>
//                             <td>{patient.firstName} {patient.lastName}</td>
//                             <td>{patient.email}</td>
//                             <td>
//                                 <button
//                                     onClick={() => removePatient(patient.id)}
//                                     className="btn btn-icon"
//                                     aria-label="Delete patient"
//                                 >
//                                     <FontAwesomeIcon icon={faTrashAlt} />
//                                 </button>
//                                 <button
//                                 onClick={() => onEdit(patient)}
//                                 className='btn btn-icon'
//                                 aria-label='Edit patient member'
//                                 >
//                                     <FontAwesomeIcon icon={faEdit} />
//                                 </button>
//                             </td>

//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PatientList;



import React, { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './PatientList.css';

const PatientList = ({ onEdit }) => {
    const { patients, removePatient } = useContext(PatientContext);

    return (
        <div className="patient-list">
            <h3>Patient List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.firstName} {patient.lastName}</td>
                            <td>{patient.email}</td>
                            <td>
                                <button
                                    onClick={() => removePatient(patient.id)}
                                    className="btn btn-icon"
                                    aria-label="Delete patient"
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                                <button
                                    onClick={() => onEdit(patient)}
                                    className="btn btn-icon"
                                    aria-label="Edit patient member"
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

export default PatientList;
