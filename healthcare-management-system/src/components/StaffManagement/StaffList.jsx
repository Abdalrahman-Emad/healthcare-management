// import React, { useContext } from 'react';
// import { StaffContext } from '../../context/StaffContext';

// const StaffList = () => {
//     const { staff } = useContext(StaffContext);

//     return (
//         <div className="staff-list">
//             <h3>Staff List</h3>
//             <ul>
//                 {staff.map(staffMember => (
//                     <li key={staffMember.id}>{staffMember.firstName} {staffMember.lastName} - {staffMember.role}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default StaffList;



import React, { useContext } from 'react';
import { StaffContext } from '../../context/StaffContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './StaffList.css'; // Ensure you import the CSS file

const StaffList = ({ onEdit }) => {
    const { staff, removeStaff } = useContext(StaffContext);

    return (
        <div className="staff-list">
            <h3>Staff List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map(member => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.firstName} {member.lastName}</td>
                            <td>{member.role}</td>
                            <td>{member.email}</td>
                            <td>
                                <button
                                    onClick={() => removeStaff(member.id)}
                                    className="btn btn-icon"
                                    aria-label="Delete staff member"
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                                <button
                                    onClick={() => onEdit(member)}
                                    className="btn btn-icon"
                                    aria-label="Edit staff member"
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

export default StaffList;
